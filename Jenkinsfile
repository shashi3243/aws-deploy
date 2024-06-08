pipeline {
    agent any

    tools {
        nodejs 'NODEJS'  // Use the name you configured in Jenkins
    }

    environment {
        PATH = "${env.NODEJS_HOME}/bin:${PATH}"  // Add Node.js bin directory to PATH
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

                // Flush PM2 logs
                sh 'pm2 flush'

                // Start or reload PM2 processes
                sh 'pm2 reload ecosystem.config.js --env production'
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


