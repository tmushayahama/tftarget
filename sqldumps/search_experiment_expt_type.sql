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
-- Table structure for table `search_experiment_expt_type`
--

DROP TABLE IF EXISTS `search_experiment_expt_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `search_experiment_expt_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `experiment_id` int(11) NOT NULL,
  `experimenttype_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `search_experiment_expt_type_experiment_id_4507fb55874f64a0_uniq` (`experiment_id`,`experimenttype_id`),
  KEY `search_experiment_expt_type_c5a7045b` (`experiment_id`),
  KEY `search_experiment_expt_type_727459b9` (`experimenttype_id`),
  CONSTRAINT `experimenttype_id_refs_id_641ac440ee5fe56c` FOREIGN KEY (`experimenttype_id`) REFERENCES `search_experimenttype` (`id`),
  CONSTRAINT `experiment_id_refs_id_342f2424d0257fb8` FOREIGN KEY (`experiment_id`) REFERENCES `search_experiment` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=581 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `search_experiment_expt_type`
--

LOCK TABLES `search_experiment_expt_type` WRITE;
/*!40000 ALTER TABLE `search_experiment_expt_type` DISABLE KEYS */;
INSERT INTO `search_experiment_expt_type` VALUES (1,1,1),(2,2,1),(3,3,1),(4,4,1),(5,5,2),(6,6,2),(7,7,3),(8,8,3),(9,9,2),(10,10,2),(11,11,3),(12,12,3),(13,13,3),(14,14,1),(15,15,4),(16,16,4),(17,17,4),(18,18,4),(19,19,4),(20,20,4),(21,21,4),(22,22,5),(23,23,6),(24,24,5),(25,25,1),(26,26,7),(27,27,8),(28,28,8),(29,29,8),(30,30,8),(31,31,8),(32,32,8),(33,33,8),(34,34,8),(35,35,8),(36,36,8),(37,37,8),(38,38,8),(39,39,8),(40,40,8),(41,41,8),(42,42,8),(43,43,8),(44,44,8),(45,45,8),(46,46,8),(47,47,8),(48,48,8),(49,49,8),(50,50,8),(51,51,8),(52,52,8),(53,53,8),(54,54,8),(55,55,8),(56,56,8),(57,57,4),(58,58,1),(59,59,1),(60,60,1),(61,61,1),(62,62,1),(63,63,1),(64,64,1),(65,65,1),(66,66,1),(67,67,1),(68,68,1),(69,69,5),(70,70,5),(71,71,8),(72,72,8),(73,73,5),(74,74,5),(75,75,2),(76,76,2),(77,77,2),(78,78,2),(79,79,2),(80,80,2),(81,81,2),(82,82,2),(83,83,2),(84,84,2),(85,85,2),(86,86,2),(87,87,5),(88,88,4),(89,89,4),(90,90,4),(91,91,4),(92,92,4),(93,93,4),(94,94,4),(95,95,4),(96,96,4),(97,97,4),(98,98,4),(99,99,4),(100,100,4),(101,101,4),(102,102,4),(103,103,4),(104,104,4),(105,105,4),(106,106,4),(107,107,4),(108,108,4),(109,109,4),(110,110,4),(111,111,4),(112,112,4),(113,113,4),(114,114,4),(115,115,4),(116,116,4),(117,117,4),(118,118,4),(119,119,4),(120,120,4),(121,121,4),(122,122,4),(123,123,4),(124,124,4),(125,125,4),(126,126,4),(127,127,4),(128,128,4),(129,129,4),(130,130,4),(131,131,4),(132,132,4),(133,133,4),(134,134,4),(135,135,4),(136,136,4),(137,137,4),(138,138,4),(139,139,4),(140,140,4),(141,141,4),(142,142,4),(143,143,4),(144,144,4),(145,145,4),(146,146,4),(147,147,4),(148,148,4),(149,149,4),(150,150,4),(151,151,4),(152,152,4),(153,153,4),(154,154,4),(155,155,4),(156,156,4),(157,157,4),(158,158,4),(159,159,4),(160,160,4),(161,161,4),(162,162,4),(163,163,4),(164,164,4),(165,165,4),(166,166,4),(167,167,4),(168,168,4),(169,169,4),(170,170,4),(171,171,4),(172,172,4),(173,173,4),(174,174,4),(175,175,4),(176,176,4),(177,177,4),(178,178,4),(179,179,4),(180,180,4),(181,181,4),(182,182,4),(183,183,4),(184,184,4),(185,185,4),(186,186,4),(187,187,4),(188,188,4),(189,189,4),(190,190,4),(191,191,4),(192,192,4),(193,193,4),(194,194,4),(195,195,4),(196,196,4),(197,197,4),(198,198,4),(199,199,4),(200,200,4),(201,201,4),(202,202,4),(203,203,4),(204,204,4),(205,205,4),(206,206,4),(207,207,4),(208,208,4),(209,209,4),(210,210,4),(211,211,4),(212,212,4),(213,213,4),(214,214,4),(215,215,4),(216,216,4),(217,217,4),(218,218,4),(219,219,4),(220,220,4),(221,221,4),(222,222,4),(223,223,4),(224,224,4),(225,225,4),(226,226,4),(227,227,4),(228,228,4),(229,229,4),(230,230,4),(231,231,4),(232,232,4),(233,233,4),(234,234,4),(235,235,4),(236,236,4),(237,237,5),(238,238,5),(239,239,2),(240,243,9),(241,244,3),(242,245,3),(243,246,7),(244,247,9),(245,248,3),(246,249,1),(247,250,1),(248,251,1),(249,252,4),(250,253,9),(251,254,1),(252,255,1),(253,256,10),(254,257,1),(255,258,9),(256,259,11),(257,260,11),(258,261,11),(259,262,11),(260,263,11),(261,264,11),(262,265,11),(263,266,11),(264,267,11),(265,268,11),(266,269,11),(267,270,11),(268,271,11),(269,272,11),(270,273,11),(271,274,11),(272,275,11),(273,276,11),(274,277,11),(275,278,1),(276,279,1),(277,280,1),(278,281,1),(279,282,1),(280,283,1),(281,284,1),(282,285,1),(283,286,1),(284,287,1),(285,288,1),(286,289,1),(287,290,1),(288,291,1),(289,292,1),(290,293,1),(291,294,1),(292,295,1),(293,296,1),(294,297,1),(295,298,1),(296,299,1),(297,300,1),(298,301,1),(299,302,1),(300,303,1),(301,304,1),(302,305,1),(303,306,1),(304,307,1),(305,308,1),(306,309,1),(307,310,1),(308,311,1),(309,312,1),(310,313,1),(311,314,1),(312,315,1),(313,316,1),(314,317,1),(315,318,1),(316,319,1),(317,320,1),(318,321,1),(319,322,1),(320,323,1),(321,324,1),(322,325,7),(323,327,9),(324,328,9),(325,329,9),(326,330,9),(327,331,9),(328,332,9),(329,333,9),(330,334,9),(331,335,9),(332,336,9),(333,337,1),(334,338,5),(335,339,12),(336,340,1),(337,343,13),(338,344,13),(339,345,7),(340,346,2),(341,347,1),(342,348,1),(343,349,1),(344,350,1),(345,351,1),(346,352,5),(347,353,3),(348,354,14),(349,355,2),(350,356,2),(351,357,2),(352,359,1),(353,360,1),(354,361,1),(355,362,1),(356,363,1),(357,364,2),(358,365,1),(359,366,5),(360,367,1),(361,368,1),(362,369,1),(363,370,15),(364,371,2),(365,372,7),(366,373,1),(367,374,1),(368,375,15),(369,376,15),(370,377,2),(371,378,15),(372,379,1),(373,380,16),(374,381,1),(375,382,1),(376,383,2),(377,384,2),(378,385,4),(379,386,4),(380,387,4),(381,388,4),(382,389,4),(383,390,1),(384,391,7),(385,392,16),(386,393,4),(387,394,1),(388,395,1),(389,396,1),(390,397,1),(391,398,1),(392,399,1),(393,400,1),(394,401,15),(395,402,15),(396,403,15),(397,404,15),(398,405,15),(399,406,15),(400,407,15),(401,408,16),(402,409,16),(403,410,16),(404,411,4),(405,412,4),(406,413,4),(407,414,4),(408,415,16),(409,416,4),(410,417,4),(411,418,16),(412,419,4),(413,420,4),(414,421,4),(415,422,4),(416,423,4),(417,424,4),(418,425,4),(419,426,4),(420,427,4),(421,428,4),(422,429,4),(423,430,4),(424,431,17),(425,432,4),(426,433,4),(427,434,4),(428,435,4),(429,436,16),(430,437,16),(431,438,16),(432,439,7),(433,440,7),(434,441,15),(435,442,15),(436,443,15),(437,444,15),(438,445,15),(439,446,15),(440,447,15),(441,448,15),(442,449,15),(443,450,4),(444,451,16),(445,452,2),(446,453,16),(447,454,2),(448,455,2),(449,456,7),(450,457,2),(451,458,18),(452,459,17),(453,460,4),(454,461,4),(455,462,4),(456,463,4),(457,464,4),(458,465,4),(459,466,4),(460,467,4),(461,468,16),(462,469,16),(463,470,1),(464,471,2),(465,472,7),(466,473,2),(467,474,1),(468,475,1),(469,476,7),(470,477,1),(471,478,1),(472,479,1),(473,480,16),(474,481,1),(475,482,1),(476,483,1),(477,484,16),(478,485,7),(479,486,7),(480,487,7),(481,488,19),(482,489,7),(483,490,7),(484,491,20),(485,492,7),(486,493,7),(487,494,2),(488,495,7),(489,496,7),(490,497,7),(491,498,7),(492,499,7),(493,500,7),(494,501,7),(495,502,7),(496,503,7),(497,504,7),(498,505,21),(499,506,4),(500,507,7),(501,508,7),(502,509,7),(503,510,2),(504,511,2),(505,512,2),(506,513,7),(507,514,7),(508,515,7),(510,516,2),(509,516,22),(511,517,23),(512,518,7),(513,519,7),(514,520,1),(515,521,7),(516,522,7),(517,523,2),(518,524,2),(519,525,2),(520,526,2),(521,527,2),(522,528,2),(523,529,2),(524,530,2),(525,531,2),(526,532,2),(527,533,2),(528,534,2),(529,535,7),(530,536,7),(531,537,7),(532,538,7),(533,539,7),(534,540,7),(535,541,7),(536,542,7),(537,543,7),(538,544,7),(539,545,7),(540,546,7),(541,547,7),(542,548,7),(543,549,4),(544,550,24),(545,551,16),(546,552,25),(547,553,1),(580,554,2),(548,554,26),(549,555,23),(550,556,16),(551,557,7),(552,558,1),(553,559,27),(554,560,28),(555,561,1),(556,562,16),(557,563,1),(558,564,29),(559,565,1),(560,566,27),(561,567,30),(562,568,31),(563,569,32),(564,570,30),(565,571,33),(566,572,33),(567,573,33),(568,574,2),(569,575,34),(570,576,35),(571,577,36),(572,577,37),(573,578,38),(574,579,39),(575,580,39),(576,581,34),(577,582,39),(579,583,35),(578,583,40);
/*!40000 ALTER TABLE `search_experiment_expt_type` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2013-02-06  4:42:00
