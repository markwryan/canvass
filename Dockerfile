FROM eclipse-temurin:latest
LABEL authors="Mark Ryan"

VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]