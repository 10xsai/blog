const Post2 = () => {

  // const REACT_APP_BLOG_SCREENSHOTS_URL = process.env.NODE_ENV==='development' 
  //                                             ? "C:/Users/gdsvs/OneDrive/Pictures/blog/screenshots/learn_git_commands" 
  //                                             : process.env.REACT_APP_BLOG_SCREENSHOTS_URL;
  // console.log(REACT_APP_BLOG_SCREENSHOTS_URL)
  const REACT_APP_BLOG_SCREENSHOTS_URL = process.env.REACT_APP_BLOG_SCREENSHOTS_URL;

  return (
    <article className="mt-3">
      <div className="bg-secondary p-3 m-3">
        <h4>Prerequisites</h4>
        <h5>
          Create a new repository on github and keep note of repository url
        </h5>
      </div>
      <div>
          <h2>Initial Config</h2>
          <h4>Set username and password.</h4>
          <code>
              # Setting user name
              <br />
              git config --global user.name {"{ github_username }"}
              <br /><br />
              # Setting user email
              <br />
              git config --global user.email {"{ github_email }"}
          </code>

          <h4>List all config</h4>
          <code>git config --list</code>
          <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_config_list.webp'} alt="" />
      </div>

      <div>
        <h2>Git clone</h2>
        <h4>Clone repository</h4>
        <code>git clone ${"{ repository_url }"}</code>
        <p>
          Using this command you can download and initialize a repository from a remote url into
          your local machine
        </p>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_clone.webp'} alt="" />

        <h4>Clone repository with different name</h4>
        <code>git clone {"{ repository_url }"} {"{ folder_name }"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_clone_rename.webp'} alt="" />

        <h4>Clone to a specific directory</h4>
        <code>git clone {"{ repository_url }"} {"{ directory_path }"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'clone_to_specific_folder.webp'} alt="" />

        <h4>Clone a specific branch</h4>
        <code>git clone -b {"{ branch_name }"} {"{ repository_url }"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_clone_branch.webp'} alt="" />
      </div>
      
      <div>
        <h2>Intializing a repository from folder</h2>

        <h4>Using git init</h4>
        <code>git init</code>
        <p>
          To initialize a repository, Git creates a hidden directory called{" "}
          <em>.git</em> . This <em>.git</em> directory stores all of the objects
          and refs that Git uses and creates as a part of your project's
          history.
        </p>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_init.webp'} alt="" />

        <h4>Connect initialized repository to remote url</h4>
        <code>git remote add origin {"{ repository_url }"}</code>
      </div>

      <div>
        <h2>Commiting changes to repository</h2>

        <h4>To Check status of files</h4>
        <code>git status</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_status.webp'} className="mb-0" alt="" />
        <p className="mb-0 pb-0"><span className="text-success">Green lines</span> indicate files are added to staging area.</p>
        <p><span className="text-danger">Red lines</span> &nbsp;&nbsp; indicate files are not added to staging area.</p>

        <h4>Add files to staging area</h4>
        <code>
          # Add particular file to staging area
          <br />
          git add {"${ file1.txt }"} {"${ file2.txt }"}
          <br />
          <br />
          # To add all files in that directory
          <br />
          git add .
        </code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_add.webp'} alt="" />


        <h4>Commit changes</h4>
        <code>git commit -m "Commit message"</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_commit.webp'} alt="" />

        <h4>Push code</h4>
        <code>
          # Push to master branch
          <br />
          git push origin master
          <br />
          <br />
          # Push to a particular branch
          <br />
          git push origin {"{ branch_name }"}
          <br />
          <br />
          # Push all branches to remote repository
          <br />
          git push --all origin
        </code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_push.webp'} alt="" />
      </div>

      <div>
        <h2>Pulling code from a branch</h2>
        <code>
          # Pull from master branch
          <br />
          git pull origin master
          <br />
          <br />
          # Push to a particular branch
          <br />
          git pull origin {"{ branch_name }"}
        </code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_pull.webp'} alt="" />
      </div>

      <div>
        <h2>Commands on Git Branch</h2>

        <h4>List all branches</h4>
        <code>git branch</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_branch.webp'} alt="" />
        <p>Green text indicates you are currently on that branch</p>
        

        <h4>Create a new branch</h4>
        <code>git branch {"{ branch_name }"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_branch_new_branch.webp'} alt="" />

        <h4>Creates a new branch and switches to newly created branch </h4>
        <code>git checkout -b {"{ branch_name }"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_checkout_new_branch.webp'} alt="" />

        <h4>Switch to another branch</h4>
        <code>git checkout {"{ branch_name }"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_checkout_branch.webp'} alt="" />
        
        <h4>Delete a branch</h4>
        <code>git branch -d {"{branch_name}"}</code>
        <img src={REACT_APP_BLOG_SCREENSHOTS_URL+'git_branch_delete.webp'} alt="" />
      </div>
    </article>
  );
};

export default Post2;
