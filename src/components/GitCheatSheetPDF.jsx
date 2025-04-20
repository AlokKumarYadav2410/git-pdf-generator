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
    marginBottom: 10,
  },
  header: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#61dafb',
  },
  body: {
    lineHeight: 1.4,
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
        <Text style={styles.body}>
          $ git init
          {"\n"}$ git remote add origin https://github.com/yourusername/your-repo.git
          {"\n"}$ git add .
          {"\n"}$ git commit -m "Initial commit"
          {"\n"}$ git push -u origin main
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.header}>3. Clone GitHub Repo to Local</Text>
        <Text style={styles.body}>
          $ git clone https://github.com/yourusername/your-repo.git
          {"\n"}$ cd your-repo
        </Text>
      </View>

      {/* 👣 FOOTER */}
      <Text style={styles.footer}> Built by Alok Kumar Yadav </Text>
    </Page>
  </Document>
);

export default GitCheatSheetPDF;
