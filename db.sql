-- MySQL dump 10.13  Distrib 5.5.28, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: tftarget
-- ------------------------------------------------------
-- Server version	5.5.28-0ubuntu0.12.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `search_association`
--

DROP TABLE IF EXISTS `search_association`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `search_association` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `gene` varchar(8) NOT NULL,
  `pmid` int(11) NOT NULL,
  `family` varchar(8) NOT NULL,
  `member` varchar(8) NOT NULL,
  `species` varchar(32) NOT NULL,
  `exp_tissues` varchar(256) NOT NULL,
  `experiment` varchar(64) NOT NULL,
  `num_replicates` int(11) NOT NULL,
  `control` varchar(256) NOT NULL,
  `quality` varchar(256) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `search_association`
--

LOCK TABLES `search_association` WRITE;
/*!40000 ALTER TABLE `search_association` DISABLE KEYS */;
INSERT INTO `search_association` VALUES (1,'MCM3',12089153,'E2f','a','Arabidopsis','[\'BY2 cell line\']','Reporter gene assay',3,'Wild-type vs over expression of E2fa/binding site mutant','-1.5 fold'),(2,'Apaf1',12982983,'E2F','3','Human','[\'Liver\']','',1,'Wildtype vs mutant','Good quality'),(3,'Asf1b',19084398,'E2F','5','Human','PBR cell line','ChIP',1,'Wild-type vs over-expression','Poor quality');
/*!40000 ALTER TABLE `search_association` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-01-14  9:58:04
