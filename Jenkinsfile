pipeline {
  agent any
  stages {
  stage('Stage 1') {
      steps {
        script {
          sh 'touch sample.txt'
        }
      }
    }
  stage('Stage 2') {
      steps {
        script {
          sh 'pwd'
        }
      }
    }
  }
}
