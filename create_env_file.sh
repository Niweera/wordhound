#!/bin/bash                                                                                                                                                                                                                                                                    
# Create a .env file from environment variables
echo MONGO_URI=$MONGO_URI 
echo SECRET_OR_KEY=$SECRET_OR_KEY 
echo MONGO_URI=$MONGO_URI >> .env
echo SECRET_OR_KEY=$SECRET_OR_KEY >> .env

#echo env_variables: >> app.yaml
#echo "  MONGO_URI: '$MONGO_URI'" >> app.yaml
#echo "  SECRET_OR_KEY: '$SECRET_OR_KEY'" >> app.yaml
cat <<EOF >> app.yaml
env_variables:
  MONGO_URI: "$MONGO_URI"
  SECRET_OR_KEY: "$SECRET_OR_KEY"
EOF
