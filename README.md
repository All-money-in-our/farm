# farm
this is ALL-money-in-our Team project
## 项目模块上传步骤:
1.克隆远程仓库代码

        git clone https://github.com/All-money-in-our/farm.git

2.从dev创建并切换到个人分支

        git checkout -b 自己的分支名字(可以是名字缩写)

3.在个人分支开发功能

4.提交到本地暂存区

        git add .

5. 提交备注(备注应该包括提交人/提交日期/所更新功能)
        例:'20200101/王迎秋/登录功能第一次更新'

        git commit -m '提交备注'
    
    
6.将个人分支合并到dev分支
(注意:  1.执行合并命令的分支 只能是母分支(也就是在dev分支下去执行合并命令) 
        2.子分支只能合并到创建它的分支上)

        git merge 个人分支名

7.更新dev分支(一定要先更新再提交!!!)

        git pull -u origin dev

8.将dev 里的内容提交到远程仓库

        git push -u origin 个人分支

