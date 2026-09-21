### BRANCHES:
main/master =
List all branches = git branch
CREATE & SWITCH the branch:
    Create a new branch = git branch <branchName>
    Switch to this branch = git checkout <branchName>
    Create a new branch and switch to it = git checkout -b <branchName>


### Modern way of creating BRANCHES:
Switch to this branch = git switch <branchName>
Create a new branch and switch to it = git switch -c <branchName>


# Connect the Local REPO with REMOTE REPO(GitHub)
    Checking Linked Remote = git remote 
    Checking Linked Remote URL's = git remote -v
    My GitHub Reporitory link: https://github.com/SaiRam5252/order-management-devops-new.git


    Ex:
    git remote add origin https://github.com/SaiRam5252/order-management-devops-new.git
    git remote show origin


    Pushing = git push origin <branch-name>
    Ex: git push origin main


    And make sure you're pushing into the same branch.
    Ex:
    Accepting:
    Local "main/master" branch --> Remote "main/master" branch
    Local  -  Remote
    Main   -  Main
    Dev    -  Dev
    UAT    -  UAT


    Do not push as below:
    Local "main/master" branch --> Remote "Dev" branch

## Git Reset
To check the latest comments/messages we added : git log --oneline
Ex: 
1872d34 (HEAD -> main, origin/main, origin/HEAD) docs: Added PUSH and REMOTE connection commands
93a6916 docs: Added the PUSH and REMOTE connection commands
1b2e467 docs: Modified the Docs on Main branch
6a8a0ff feat: Added Cart Functionality
2e2c940 Modified the Login & Signup functionality
601502a Added the Login & Signup functionality for Order Management

## Git HARD Reset
git reset --hard <commitID>
Ex: git reset --hard 1b2e467

## Pull commands:
Total Developers:
Developer A
Developer B

User Stories-909 - Developer A [My Local - making changes in local]
    Apex class, LWC, Creating objects etc 
    Developer A has made some changes and pushed it to the remote

User Stories-910 - Developer B [My Remote - making changes in remote directly]
Made some changes in feature/US-8626 branch in GitHub(Remote) itself.
And pushed the changes from feature/US-8626 branch to the dev branch by creating the PR
1. Clicking on "Pull Requests" button on tab bar.
2. Click on "New pull request".
3. Choose the base(Dev) and compare(feature/US-8626).
4. It's show what are all changes are their which not in Dev(target) using different colours.
5. Merge the changes after clicking on button "Merge pull request".

Now, Developer A
needs to work on User Stories-909
In real-time, 
    Creating the feature branch out of master/main branch 
                    OR
    Creating the feature branch out of developer/dev branch (Most common case)
    commands:
    before running below command you need to pull it first before creating new feature branch : git pull origin dev
    git checkout -b feature/US-909 dev

    Developer B - Worked in EMEA shift made some changes and pushed to remote - merge to dev

    Developer A - 
        case 1: Keep working on without pulling the latest changes which r in remote
        case 2: take the latest  changes from remote and then keep working on
        Nothing going to harm however in the real-world there would be certain cases at the time of pushing the changes to remote  or u r trying to merge the changes actual target branch(dev) at that u will know that u need to first pull the changes from target branch(dev) first and then raise the PR
    NOTE: if u have created your feature branch based out of dev then only run below command
        git pull origin dev      --> chech the current branch make sure u r in feature branch
        Then it's safe to pull from the remote dev

    To check how referesnce are connected with each other use below command
    git remote show origin


