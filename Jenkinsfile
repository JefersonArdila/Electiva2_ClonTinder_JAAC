pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'Devjefer', credentialsId: 'github', url: 'https://github.com/JefersonArdila/Electiva2_ClonTinder_JAAC.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose up -d'
            }
        }

        stage('Test Backend') {
            steps {
                bat 'docker-compose run --rm backend npm test -- --watchAll=false'
            }
        }

        stage('Test Frontend') {
            steps {
                bat 'docker-compose run --rm frontend npm test -- --watchAll=false'
            }
        }

        stage('Push Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat 'docker login -u %DOCKER_USER% -p %DOCKER_PASS%'
                    bat 'docker tag electiva2_clontinder_jaac_backend %DOCKER_USER%/electiva2_clontinder_jaac_backend:latest'
                    bat 'docker push %DOCKER_USER%/electiva2_clontinder_jaac_backend:latest'
                    bat 'docker tag electiva2_clontinder_jaac_frontend %DOCKER_USER%/electiva2_clontinder_jaac_frontend:latest'
                    bat 'docker push %DOCKER_USER%/electiva2_clontinder_jaac_frontend:latest'
                }
            }
        }
    }
    post {
        always {
            echo "Pipeline finalizada."
        }
        failure {
            echo "❌ La pipeline falló."
        }
        success {
            echo "✅ Proyecto corriendo en http://localhost:3000 (Frontend) y http://localhost:3001 (Backend API)."
        }
    }
}
