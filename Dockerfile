FROM nginx:latest

COPY build/ /usr/share/nginx/html
RUN ls -al

# Expose port 80
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]