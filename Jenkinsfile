pipeline {
    agent any

     environment {
        NODE_HOME = '/root/.nvm/versions/node/v20.14.0/bin'  // Path to your Node.js installation for root user
        PM2_HOME = '/root/.nvm/versions/node/v20.14.0/bin/pm2'   // Path to your PM2 installation
        PATH = "${NODE_HOME}:${PATH}" // Add npm path to the PATH environment variable
    }

    stages {
        stage('Preparation') {
            steps {
                // Print the Jenkins environment variables for debugging
                sh 'printenv'
            }
        }
        stage('Go to /var/www/html/aws-deploy Directory') {
            steps {
                script {
                    dir('/var/www/html/aws-deploy') {
                        // Ensure we are in the correct directory
                        sh 'pwd'
                    }
                }
            }
        }
        stage('Pull Repository') {
            steps {
                script {
                    dir('/var/www/html/aws-deploy') {
                        // Pull the latest code from the repository
                        sh 'git pull origin master'
                    }
                }
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    dir('/var/www/html/aws-deploy') {
                        // Install npm dependencies
                        sh 'npm install'
                    }
                }
            }
        }
        stage('Restart Application') {
            steps {
                script {
                    dir('/var/www/html/aws-deploy') {
                        // Restart the application using PM2
                        sh 'pm2 restart app'
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
