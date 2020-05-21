# ComputeManagement
通过实现一个简单的电脑设备管理系统来学习Angular.  
--- 

### 技术选择
Backend: ```Django 3.0.6```  
Frontend: ```Angular 9.1.10```  
Database: ```Mysql 14.14```  
UI: ```Angular Material 9.2.4```  

---

### 需求分析
需要开发的是一款电脑设备的管理系统，涉及到的实体为:```Computer```, ```Floor```, ```Building```.  每个```Building```有多个```Floor```，每个```Floor```有多个```Computer```.  

主要页面如下：
  - Dashboard: 显示所有```Computer```的概况.
  - Overview:  利用树形结构显示```Building```,```Floor```,```Computer```之间的关系，并可以在这个页面配置```Building```和```Floor```.
  - Configuration: 用表格的形式去显示所有```Computer```，实现基本的增删查改功能。
 
 ---
 
 ### 数据库设计
 由于数据库不是这个项目的重点，因此只实现最基本的字段和功能.
 
 ![Computer](https://img-blog.csdnimg.cn/20200522065405565.png) 
 ![Floor](https://img-blog.csdnimg.cn/2020052206373911.png) 
 ![Building](https://img-blog.csdnimg.cn/20200522063814881.png)
