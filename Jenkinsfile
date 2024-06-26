pipeline {
    agent any

    tools {
        nodejs 'NODEJS'  // Use the name you configured in Jenkins
    }

    environment {
         PATH = "${tool 'NODEJS'}/bin:${env.PATH}" // Add Node.js bin directory to PATH
    }

    stages {
        stage('Preparation') {
            steps {
                // Print the Jenkins environment variables for debugging
                sh 'printenv'
            }
        }
        stage('Go to /home/ubuntu/aws-deploy Directory') {
            steps {
                script {
                    dir('/home/ubuntu/aws-deploy') {
                        // Ensure we are in the correct directory
                        sh 'pwd'
                    }
                }
            }
        }
        stage('Pull Repository') {
            steps {
                script {
                    dir('/home/ubuntu/aws-deploy') {
                        // Pull the latest code from the repository
                        sh 'git checkout .'
                        sh 'git pull origin master'
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    dir('/home/ubuntu/aws-deploy') {
                        // Install npm dependencies
                        // sh 'rm -rf /var/lib/jenkins/tools/jenkins.plugins.nodejs.tools.NodeJSInstallation/NODEJS/lib/node_modules/pm2'
                        // sh 'rm -rf node_modules'
                        sh 'npm install'
                        // sh 'npm i -g pm2'
                    }
                }
            }
        }
        stage('start Application') {
            steps {
                script {
                    dir('/home/ubuntu/aws-deploy') {
                        // Set JENKINS_NODE_COOKIE to avoid process termination
                         sh 'pm2 list'
                         sh 'BUILD_ID=dontKillMe pm2 start ecosystem.config.js --env=production'
                         sh 'pm2 list'
                         sh 'pm2 logs'
                }
            }
        }
    }

}
    post {
        always {
            // Actions that will run at the end of the pipeline, regardless of the result
            echo 'Pipeline completed'
        }
        success {
            // Actions that will run if the pipeline is successful
            echo 'Pipeline succeeded'
        }
        failure {
            // Actions that will run if the pipeline fails
            echo 'Pipeline failed'
        }
    }
}