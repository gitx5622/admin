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
                        sh "docker container run -p 3000:80 gits5622/admin"
                    }
                }

    }
}