==================================
Transcription Factor Target Search
==================================

This site will allow users to search for gene transcription factors and find potential target genes.

Quickstart
----------

The server and all of it's dependencies are installed on our AWS instance, so simply visit it's IP address in your browser.
For login details and the IP address, check your email.
Once you're logged in, cd into /srv/tftarget and you can begin development.


Running the Server Locally
----------------------------------------

If you have the dependencies installed, simply run ``python manage.py runserver``, then visit ``127.0.0.1:8000`` in a browser.

If you don't have the dependencies installed, start by getting Python 2.7.3.
You can `download it for free`_ from python.org.

Now, you'll need to get pip, the Python Package Manager.
For all operating systems, `these instructions`_ will suffice.
On Debian-based Linux distributions, an easier way to get pip is to run ``apt-get install python-setuptools; easy_install pip``.
Special note to Windows users:  you may need to edit your path if the instruction above don't work, see this `Stack Overflow discussion`_.

If you plan on doing any other Python projects, particularly Django ones, you should probably ``pip install virtualenv virtualenvwrapper`` and create a virtual environment for the project.
See the `documentation for virtualenvwrapper`_ if you think you'll do any other large Python projects, otherwise you can skip this step.

Now install the rest of the dependencies by running ``pip install -r requirements.txt``.


MySQL
-----

The quickstart above is sufficient for  getting a server that can run, but eventually you'll need to install MySQL and setup Django to use it.
MySQL can be downloaded from `their website`_ and installed by following the directions.
During install, you should be asked to create a password for the ``root`` user.
Do this, and don't forget the password, you will need it soon and may need it later in an emergency.
On Debian-based Linux distributions, an easier way to get MySQL is to run ``apt-get install mysql-server``.

Once MySQL is installed, you'll need to get the Python library for talking to it.
If you're on a Debian-based Linux distribution, you can install it with ``apt-get install python-mysqldb``.
Other Linux distributions should have a similar package available, but the Python MySQLdb library cannot be installed on Windows without having to edit a few files manually.
Talk to me (Joel Friedly) and I'll try to get you working on Windows.
If you're unsure whether or not your MySQLdb installation worked, open a Python interpreter and run ``import MySQLdb``.

Once the Python library is installed, you'll need to create your ``tftarget`` MySQL user.
To do this, run ``mysql -uroot -p`` and enter the root password that you picked above, then input these SQL commands at the prompt, where $PASSWORD is a new password that you choose::

    CREATE USER 'tftarget'@'localhost' IDENTIFIED BY '$PASSWORD';
    CREATE DATABASE tftarget;
    GRANT ALL PRIVILEGES ON *.* to 'tftarget'@'localhost' WITH GRANT OPTION;

MySQL should tell you that each query was ok.
Exit the MySQL prompt and now create a file in this directory called ``local_settings.py``.
Put the following lines into the file and save it::

    import settings

    settings.DATABASES['default']['PASSWORD'] = '$PASSWORD'

Ensure that Django has access to the MySQL database by opening a Python interpreter with ``python manage.py shell`` and then running these commands::

    from search.models import Experiment
    exp = Experiment(gene='3 feet tall', pmid=42, transcription_family='teddy bear', species='ewok', expt_name='giant ewok experiment', replicates='one million', control='human', quality='God-given')
    exp.save()
    exp.delete()


Using South
'''''''''''

Databases complain whenever a table schema is changed, and anytime you make a change to a class in a models.py file it represents a change to a table schema.
South makes migrating table schemas easy, without losing your data.
Information on South can be found on `their tutorial`_, and you should already have it installed if the ``pip install -r requirements.txt`` worked.
The first thing you'll need to do is open the ``settings.py`` file and comment out lines in INSTALLED_APPS that list apps that we built.
Currently, the only app that we've built is called 'search', so just comment out the line that says ``'search',``.
Now run a ``python manage.py syncdb``, and create a Django admin user by following the prompts.
Finally, uncomment the line(s) you just commented out and run this command for each app that we built, replacing $APP_NAME with the name of the app::

    python manage.py migrate $APP_NAME

In order to load the latest SQL dump, run ``mysql -uroot -p tftarget < insert.sql`` and give the root user's password at the prompt.

What to do if the ID's are Wrong
''''''''''''''''''''''''''''''''

If you run into errors that rows are attempting to foreign key to other rows that don't exist when you're trying to import the data, read on.
First, delete all the data in each table that currently contains data using the SQL command ``DELETE FROM $TABLE_NAME``.
Then, run ``ALTER TABLE $TABLE_NAME AUTO_INCREMENT=n`` to set the AUTO_INCREMENT value back down to one (or any other value).
You should now be able to retry the ``mysql -uroot -p tftarget < insert.sql`` command and hopefully it will work.
If it doesn't don't worry, we're just using fake data for now.
Do NOT do this on a production database.


About Python
------------

The best introduction to Python that I know of is the `Python Tutorial`_ at python.org.
Other highly recommended tutorials include `Dive into Python`_ and `Learn Python the Hard Way`_.


About Django
------------

The `Django Tutorial`_ is an excellent four-part starter series on Django.
It will assume that you know at least a little Python though.


.. _download it for free: http://python.org/download/releases/2.7.3/
.. _these instructions: http://pypi.python.org/pypi/setuptools
.. _Stack Overflow discussion: http://stackoverflow.com/questions/4750806/how-to-install-pip-on-windows
.. _documentation for virtualenvwrapper: http://virtualenvwrapper.readthedocs.org/en/latest/
.. _their website: http://www.mysql.com/downloads/mysql/
.. _their tutorial: http://south.readthedocs.org/en/latest/tutorial/part1.html
.. _Python Tutorial: http://docs.python.org/2/tutorial/
.. _Dive into Python: http://www.diveintopython.net/
.. _Learn Python the Hard Way: http://learnpythonthehardway.org/
.. _Django Tutorial: https://docs.djangoproject.com/en/dev/intro/tutorial01/
