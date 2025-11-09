pipeline {
    agent any

    environment {
        // Credenciales seguras de Jenkins
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        ACR_LOGIN_SERVER = "mproyectoelectiva3.azurecr.io"
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

        stage('Test Backend') {
            steps {
                bat 'docker-compose run --rm backend npm test'
            }
        }

        stage('Push Images to DockerHub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    bat """
                    docker login -u %DOCKER_USER% -p %DOCKER_PASS%
                    docker tag electiva2_clontinder_jaac_backend %DOCKER_USER%/electiva2_clontinder_jaac_backend:latest
                    docker tag electiva2_clontinder_jaac_frontend %DOCKER_USER%/electiva2_clontinder_jaac_frontend:latest
                    docker push %DOCKER_USER%/electiva2_clontinder_jaac_backend:latest
                    docker push %DOCKER_USER%/electiva2_clontinder_jaac_frontend:latest
                    """
                }
            }
        }

        stage('Push Images to Azure Container Registry') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'azure-acr', usernameVariable: 'ACR_USER', passwordVariable: 'ACR_PASSWORD')]) {
                    bat """
                    docker login %ACR_LOGIN_SERVER% -u %ACR_USER% -p %ACR_PASSWORD%
                    docker tag electiva2_clontinder_jaac_backend %ACR_LOGIN_SERVER%/backend:latest
                    docker tag electiva2_clontinder_jaac_frontend %ACR_LOGIN_SERVER%/frontend:latest
                    docker push %ACR_LOGIN_SERVER%/backend:latest
                    docker push %ACR_LOGIN_SERVER%/frontend:latest
                    """
                }
            }
        }

        stage('Deploy to Azure') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'azure-acr', usernameVariable: 'ACR_USER', passwordVariable: 'ACR_PASSWORD')]) {
                    bat """
                    az login --service-principal -u %ACR_USER% -p %ACR_PASSWORD% --tenant <TU_TENANT_ID>
                    az container restart --name backend-container --resource-group mi-proyecto
                    az container restart --name frontend-container --resource-group mi-proyecto
                    """
                }
            }
        }

        stage('Deploy Containers Locally (Opcional)') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d'
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
            echo "✅ Proyecto desplegado correctamente."
        }
    }
}
