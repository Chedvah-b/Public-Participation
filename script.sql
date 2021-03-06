USE [master]
GO
/****** Object:  Database [Public-participation]    Script Date: 28/06/2021 13:37:00 ******/
CREATE DATABASE [Public-participation]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'Public-participation', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\Public-participation.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'Public-participation_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\Public-participation_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [Public-participation] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [Public-participation].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [Public-participation] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [Public-participation] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [Public-participation] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [Public-participation] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [Public-participation] SET ARITHABORT OFF 
GO
ALTER DATABASE [Public-participation] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [Public-participation] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [Public-participation] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [Public-participation] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [Public-participation] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [Public-participation] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [Public-participation] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [Public-participation] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [Public-participation] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [Public-participation] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [Public-participation] SET  DISABLE_BROKER 
GO
ALTER DATABASE [Public-participation] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [Public-participation] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [Public-participation] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [Public-participation] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [Public-participation] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [Public-participation] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [Public-participation] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [Public-participation] SET RECOVERY FULL 
GO
ALTER DATABASE [Public-participation] SET  MULTI_USER 
GO
ALTER DATABASE [Public-participation] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [Public-participation] SET DB_CHAINING OFF 
GO
ALTER DATABASE [Public-participation] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [Public-participation] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'Public-participation', N'ON'
GO
USE [Public-participation]
GO
/****** Object:  Table [dbo].[dbo.HazardReports]    Script Date: 28/06/2021 13:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dbo.HazardReports](
	[Topic] [nchar](10) NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Location] [nchar](10) NOT NULL,
	[img] [nchar](10) NOT NULL,
	[date] [nchar](10) NOT NULL,
	[counter] [decimal](18, 0) NOT NULL,
	[email] [nchar](10) NOT NULL,
	[ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_dbo.HazardReports] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[dbo.User]    Script Date: 28/06/2021 13:37:00 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[dbo.User](
	[fisrt_name] [nchar](50) NOT NULL,
	[last_name] [nchar](50) NOT NULL,
	[Email] [nchar](10) NOT NULL,
	[wa_number] [nchar](50) NOT NULL,
	[counter] [decimal](18, 0) NULL,
 CONSTRAINT [PK_dbo.User] PRIMARY KEY CLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[dbo.HazardReports]  WITH CHECK ADD  CONSTRAINT [FK_dbo.HazardReports_dbo.User1] FOREIGN KEY([email])
REFERENCES [dbo].[dbo.User] ([Email])
GO
ALTER TABLE [dbo].[dbo.HazardReports] CHECK CONSTRAINT [FK_dbo.HazardReports_dbo.User1]
GO
USE [master]
GO
ALTER DATABASE [Public-participation] SET  READ_WRITE 
GO
