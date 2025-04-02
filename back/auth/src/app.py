from fastapi import Depends, FastAPI

from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

app = FastAPI()

@app.get("/health")
async def authenticated_route():
    return {"message": f"AWS IAC! 🥳🎉😜"}

@app.get("/")
async def authenticated_route():
    return {"message": f"AWS ROOT! 🥳🎉😜"}


handler = Mangum(app, lifespan="off")
