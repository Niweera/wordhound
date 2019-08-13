#!/bin/bash                                                                                                                                                                                                                                                                    
# Create a .env file from environment variables
echo MONGO_URI=$MONGO_URI 
echo SECRET_OR_KEY=$SECRET_OR_KEY 
echo MONGO_URI=$MONGO_URI >> .env
echo SECRET_OR_KEY=$SECRET_OR_KEY >> .env
