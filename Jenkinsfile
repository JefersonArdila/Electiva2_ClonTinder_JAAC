pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub') // Configura en Jenkins
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/tu-usuario/tu-repo.git' // Cambia por tu repo
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Test Backend') {
            steps {
                sh 'docker-compose run --rm backend npm test'
            }
        }
        stage('Push Images') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh 'docker tag electiva-backend $DOCKER_USER/electiva-backend:latest'
                    sh 'docker push $DOCKER_USER/electiva-backend:latest'
                    sh 'docker tag electiva-frontend $DOCKER_USER/electiva-frontend:latest'
                    sh 'docker push $DOCKER_USER/electiva-frontend:latest'
                }
            }
        }
    }
}