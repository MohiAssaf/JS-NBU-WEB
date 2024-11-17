pipeline {
    agent any

    environment { // името на снимката запазен под този вериабъл
        DOCKER_IMAGE = 'mo2003/nbu:latest'
    }

    stages {
        stage('Clone Repository') { // клониране на репото с новите промени
            steps {
                git branch: 'main', url: 'https://github.com/MohiAssaf/JS-NBU-WEB.git'
            }
        }

        stage('Check Docker') { // Проверка дали женкинс има достъп към докер
            steps {
                sh 'which docker'
            }
        }

        stage('Build Docker Image') { //build на докер снимката с новите промени 
            steps {
                script {
                    docker.build(env.DOCKER_IMAGE)
                }
            }
        }

        stage('Push Docker Image') { // push на снимката с новите промени в докер хъб с достъп през креденшълите които добавих в женкинс с това ид dockerhub-credentials-id'
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials-id', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh """
                        echo $DOCKER_PASSWORD | docker login -u $DOCKER_USERNAME --password-stdin
                        docker push ${env.DOCKER_IMAGE}
                        """
                    }
                }
            }
        }

        stage('Run New Docker Image') { // спиране и изтриване на акитвен койтенър АКО има и рънване на новия контейнър 
            steps {
                script {
                    sh """
                    docker stop nbu_web || true
                    docker rm nbu_web || true
                    docker run -d --name nbu_web -p 8000:8000 ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }

    post {
        always { // изписване дали пайплайна работи правилно или не
            echo 'Pipeline finished!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
