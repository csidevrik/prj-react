# This is a sample file for EMOV EP container images

# Set base image fedora why we love fedora
FROM fedora:37 as emovlnx


# Label to identify the creator 
LABEL maintainer='carlos.sigua@gmail.com'
LABEL version='2.0'
LABEL description='Fedora container for company emov'

# Copiar el archivo de configuracion al contenedor
COPY .env .env

# Definiendo ARGUMENTOS DE CONSTRUCCION
ARG USERNADMIN
ARG PASSNADMIN

# Actualizamos el sistema y usamos los argumentos anteriores
ENV USEREMOV=${USERNADMIN}
ENV PASSC=${PASSNADMIN}

RUN dnf update -y 
RUN dnf install -y sudo 
RUN useradd -m -s /bin/sh ${USEREMOV} 
RUN echo "${USEREMOV}:${PASSC}" | chpasswd
RUN usermod -aG wheel $USEREMOV

RUN dnf install -y zsh git ncdu htop

# Cambiamos al usuario por defecto
USER ${USEREMOV}

# Se define el directorio de trabajo
ENV PATHUSER /home/${USEREMOV}
WORKDIR ${PATHUSER}

#Ejecuta un comando cuando se inicie el contenedor
CMD [ "bash" ]


