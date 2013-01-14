==================================
Transcription Factor Target Search
==================================

This site will allow users to search for gene transcription factors and find potential target genes.


Quickstart
----------

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

At this point you're arguably ready to go.
See the next section for instructions on installing and configuring MySQL, or just comment out the ``DATABASES`` variable in ``settings.py``.
Since this is a database-driven application, the search function will naturally not work if you just comment out the ``DATABASES`` variable, but you will at least have the rest of the server working.


MySQL
-----

The quickstart above is sufficient for starting the site, but eventually you'll need to install MySQL and setup Django to use it.
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

    from settings import *

    DATABASES['default']['PASSWORD'] = '$PASSWORD'

You will likely end up needing to learn how to use Django South as well.
Databases complain whenever a table schema is changed, and anytime you make a change to a class in a models.py file it represents a change to a table schema.
South makes migrating table schemas easy, without losing your data.
Information on South can be found on `their tutorial`_, and you should already have it installed if the ``pip install -r requirements.txt`` worked.
This step isn't strictly necessary if you won't be doing much development on anything affecting the database or if you know how to use mysql reasonably well, but if you'd like to use South, run these commands for each app that we build::

    python manage.py schemamigration $APP_NAME --initial
    python manage.py migrate $APP_NAME

Currently, our only app is called 'search', so replace $APP_NAME with 'search' above (without quotes).
If we add more apps, you'll need to run each of the above commands for each app.

Whether you setup up South or not, you can now run ``python manage.py syncdb``.
This will create necessary tables in MySQL and a Django admin user.
In order to load the latest SQL dump that I've been using, run ``mysql -uroot -p tftarget < db.sql`` and give the root user's password at the prompt.


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
