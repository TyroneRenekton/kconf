FROM java:8

ENV JAVA_OPTS ""
ENV JAR_NAME kconf

COPY target/${JAR_NAME}.jar /app.jar
EXPOSE 8080
CMD ["/bin/sh", "-c", "java $JAVA_OPTS -jar /app.jar --spring.profiles.active=docker"]
