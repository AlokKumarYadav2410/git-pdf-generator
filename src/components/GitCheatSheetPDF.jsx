import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#1e1e1e',
    color: 'white',
    padding: 30,
    fontSize: 12,
    position: 'relative',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 15,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#61dafb',
  },
  body: {
    lineHeight: 1.4,
    marginBottom: 6,
  },
  codeBlock: {
    fontFamily: 'Courier',
    backgroundColor: '#333',
    color: '#61dafb',
    padding: 8,
    borderRadius: 4,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 30,
    right: 30,
    textAlign: 'center',
    fontSize: 10,
    color: '#bbbbbb',
    borderTop: '1 solid #333',
    paddingTop: 8,
  },
});

const GitCheatSheetPDF = ({ name }) => (
  <Document>
    <Page style={styles.page}>
      <Text style={styles.title}>Git & GitHub Cheat Sheet for {name || 'Developer'}</Text>

      <View style={styles.section}>
        <Text style={styles.header}>1. Create New GitHub Repo</Text>
        <Text style={styles.body}>
          - Go to https://github.com → New Repository
          {"\n"}- Name your repo, choose Public/Private, and optionally add a README
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>2. Push Local Project to GitHub</Text>
        <Text style={styles.codeBlock}>
          $ git init{'\n'}
          $ git remote add origin https://github.com/yourusername/your-repo.git{'\n'}
          $ git add .{'\n'}
          $ git commit -m "Initial commit"{'\n'}
          $ git push -u origin main
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>3. Clone GitHub Repo to Local</Text>
        <Text style={styles.codeBlock}>
          $ git clone https://github.com/yourusername/your-repo.git{'\n'}
          $ cd your-repo
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>4. Check Current Git Status</Text>
        <Text style={styles.codeBlock}>$ git status</Text>
        <Text style={styles.body}>
          - Shows changes in your working directory — what’s staged, unstaged, or untracked.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>5. Track a New File or Changes</Text>
        <Text style={styles.codeBlock}>
          $ git add filename{'\n'}
          # or add all changes{'\n'}
          $ git add .
        </Text>
        <Text style={styles.body}>
          - Adds files to the staging area in preparation for a commit.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>6. Commit Changes with a Message</Text>
        <Text style={styles.codeBlock}>$ git commit -m "Your commit message"</Text>
        <Text style={styles.body}>
          - Saves your staged changes to the local repository with a message explaining what changed.
        </Text>
      </View>

      <Text style={styles.footer}>Built by Alok Kumar Yadav</Text>
    </Page>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>7. View Commit History</Text>
        <Text style={styles.codeBlock}>$ git log</Text>
        <Text style={styles.body}>
          - Lists all commits in your branch, showing hash, author, date, and message.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>8. Create a New Branch</Text>
        <Text style={styles.codeBlock}>$ git checkout -b new-branch-name</Text>
        <Text style={styles.body}>
          - Creates and switches to a new branch.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>9. Switch to an Existing Branch</Text>
        <Text style={styles.codeBlock}>$ git checkout branch-name</Text>
        <Text style={styles.body}>
          - Moves you to the specified branch.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>10. Merge a Branch into Main</Text>
        <Text style={styles.codeBlock}>
          $ git checkout main{'\n'}
          $ git merge branch-name
        </Text>
        <Text style={styles.body}>
          - Merges changes from another branch into `main`.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>11. Pull Latest Changes from Remote</Text>
        <Text style={styles.codeBlock}>$ git pull origin main</Text>
        <Text style={styles.body}>
          - Downloads and integrates changes from the remote repository into your current branch.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>12. Push Local Changes to Remote</Text>
        <Text style={styles.codeBlock}>$ git push origin branch-name</Text>
        <Text style={styles.body}>
          - Uploads your local commits to the remote branch.
        </Text>
      </View>
      <Text style={styles.footer}>Built by Alok Kumar Yadav</Text>
    </Page>
    <Page style={styles.page}>

      <View style={styles.section}>
        <Text style={styles.header}>13. Delete a Branch (Local)</Text>
        <Text style={styles.codeBlock}>$ git branch -d branch-name</Text>
        <Text style={styles.body}>
          - Deletes a branch from your local repo after merging.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>14. Check Remote URL</Text>
        <Text style={styles.codeBlock}>$ git remote -v</Text>
        <Text style={styles.body}>
          - Lists the remote repository URLs connected to your local repo.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>15. Undo Last Commit (Keep Changes)</Text>
        <Text style={styles.codeBlock}>$ git reset --soft HEAD~1</Text>
        <Text style={styles.body}>
          - Undo the last commit, keeping the changes in staging.
        </Text>
      </View>

      <Text style={styles.footer}>Built by Alok Kumar Yadav</Text>
    </Page>
  </Document>
);

export default GitCheatSheetPDF;