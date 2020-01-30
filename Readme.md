
# Multicontainer Test - Timeout Nginx


## Fuente
https://medium.com/@santhoz/nginx-sidecar-reverse-proxy-for-performance-http-to-https-redirection-in-kubernetes-dd9dbe2fd0c7



# Pasos

## 1. Crear ConfigMap
```
kubectl create configmap nginx --from-file=nginx.conf
```
## 2. Applicar el Deployment
```
kubectl apply -f deployment.yaml
```
## 3. Applicar el Servicio
```
kubectl apply -f service.yaml
```
## 4. Listar Pods
```
kubectl get pods
```
## 5. Abrir una consola en el contenedor de la App
```
kubectl exec -it my-node-app-ff8988587-jkfgw -c my-node-app /bin/sh
```
## 6. Instalar Curl en el contenedor
```
apk add --update curl
```
## 7. realizar una petición HTTP al servidor e Nginx
```
curl localhost
```
