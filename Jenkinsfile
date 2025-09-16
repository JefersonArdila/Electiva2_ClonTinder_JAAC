pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
    }
    stages {
        stage('Checkout') {
            steps {
                git credentialsId: 'github', url: 'https://github.com/JefersonArdila/Electiva2_ClonTinder_JAAC.git'
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
                    sh 'docker tag electiva2_clontinder_jaac_backend $DOCKER_USER/electiva2_clontinder_jaac_backend:latest'
                    sh 'docker push $DOCKER_USER/electiva2_clontinder_jaac_backend:latest'
                    sh 'docker tag electiva2_clontinder_jaac_frontend $DOCKER_USER/electiva2_clontinder_jaac_frontend:latest'
                    sh 'docker push $DOCKER_USER/electiva2_clontinder_jaac_frontend:latest'
                }
            }
        }
    }
}