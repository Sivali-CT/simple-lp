# Simple Landing Page 
This is solely for demonstration purposes.


![landing page](https://res.cloudinary.com/andinianst93/image/upload/t_edited-1/ew8qxoevgko2rykpbuyi.jpg)


# K8s 

## Deployment:
```bash
apiVersion: apps/v1
kind: Deployment
metadata:
  name: simple-lp
  namespace: lp
  labels:
    app: simple-lp
spec:
  replicas: 3
  selector:
    matchLabels:
      app: simple-lp
  template:
    metadata:
      labels:
        app: simple-lp
    spec:
      containers:
      - name: simple-lp
        image: svlct/simple-lp:v1

```

## Service:
```bash
apiVersion: v1
kind: Service
metadata:
  name: simple-lp
  namespace: lp
spec:
  selector:
    app: simple-lp
  ports:
    - protocol: TCP
      port: 3000
      targetPort: 3000
```

## Ingress:
```bash
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: simple-lp-ingress
  namespace: lp
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  ingressClassName: nginx
  rules:
  - host: "notejunction.com"
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: simple-lp
            port:
              number: 3000

```

