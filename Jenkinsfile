pipeline {
        environment {
            registry = "gits5622/admin"
            registryCredential = 'docker-hub'
            dockerImage = ''
            }
        agent any
        stages {
                stage('Cloning our Git') {
                    steps {
                    git 'git@github.com:gitx5622/admin.git'
                    }
                }
                stage('Building our image') {
                    steps{
                        script {
                        dockerImage = docker.build registry
                        }
                    }
                    post{
                        always{
                            echo "Running"
                        }
                        success{
                            echo "Success"

                        }
                        failure{
                            echo "Failed"
                        }
                    }
                }
                 stage('Deploy our image') {
                                    steps{
                                        script {
                                        docker.withRegistry( '', registryCredential ) {
                                        dockerImage.push()
                                            }
                                        }
                                    }
                                }

                stage ('Running tha Application'){
                    steps{
                        sh "docker-compose up -d"
                    }
                }

    }
}