# Quizztory

![alt text](https://github.com/Blue-Ocean-A/Quizztory/blob/main/quizztoryLogo.jpg?raw=true)

## Test your history knowledge and compare quiz scores with friends in the wildly popular new app, Quizztory!

## Brought to you by:
Jenna Groth, Tamir Amitai, Kim Schaefer, Matt Salmons, and Julian Bowman

## Project Timeline:
This phase of Quizztory was implemented in a 9 day timeframe.

## Git Workflow
1) Switch the repo to the master branch, pull the latest commits and resets the repo's local copy of master to match the latest version
```
git checkout main
git fetch origin main
```
2) Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch. This checks out a branch called new-feature based on master, and the -b flag tells Git to create the branch if it doesn’t already exist.
```
git checkout -b new-feature
```
3) Work on the feature and make commits regularly with working code. When ready, push your commits, updating the feature branch.
```
git status
git add <some-file>
git commit
```
4) Push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch. Make sure to pull the latest version of main, then the second command pushes new-feature to the central repository (origin).
```
git pull origin main
git push origin new-feature
```
5) To get feedback on the new feature branch, create a pull request in Github. Now teammates comment and approve the pushed commits. Resolve their comments locally, commit, and push the suggested changes. Your updates appear in the pull request. Make sure to add the Jira issue number in the Pull Request comment:
```
closes #{issue-number}
```
6) Once approved by the team, merge your pull request. Before you merge, you may have to resolve merge conflicts if others have made changes to the repo. First, you need to make sure your local master is synchronized with the upstream master. Then, you merge the feature branch into master and push the updated main back to the central repository.
```
git checkout main
git pull origin main
git pull origin new-feature
<resolve conflicts>
git push origin new-feature
```
## Dependencies
- Styling framework: Material UI
- Testing: Jest, enzyme
- Linter: AirBnb style guide
- Asset compilation: Webpack/Webpack-dev
- Transpiling: Babel
- Front-End MVC: ReactJS with hooks for state management
- Server MVC: Express
- HTTP client: Axios
- Database connection: Mongoose

## Database Initialization
1. Download data folder from google drive and place in root directory.
2. Log into mongo shell( ~:  mongo ).
3. Create new quizztory database ( >  use quizztory ).
     !!!If you already have data in quizztory empty it first to ensure we dont have duplicate data. ( >  db.dropDatabase() )
4. From root project directory terminal run db init file with node 
   (~/Quizztory:  node db.init.js ).
5. You should see a message indicating that seeding the database was succesful.

