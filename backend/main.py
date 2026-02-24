from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Query
from database import matches_collection

app = FastAPI(title="Cricket World Cup API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Cricket World Cup API is running 🚀"}


@app.get("/matches")
def get_matches(
    team: str | None = Query(default=None),
    winner: str | None = Query(default=None),
    venue: str | None = Query(default=None),
    stage: str | None = Query(default=None)
):
    query = {}

    if winner:
        query["Winners"] = winner
    
    if venue:
        query["Venue"] = venue
    
    if stage:
        query["Stage"] = stage
    
    if team:
        query["$or"] = [
            {"1st Team": team},
            {"2nd Team": team}
        ]

    matches = list(matches_collection.find(query,{"_id":0}))
    return matches

@app.get("/teams")
def get_teams():
    teams_1 = matches_collection.distinct("1st Team")
    teams_2 = matches_collection.distinct("2nd Team")
    all_teams=list(set(teams_1 + teams_2))
    return {"teams": sorted(all_teams)}


@app.get("/venues")
def get_venues():
    venues=matches_collection.distinct("Venue")
    return sorted(venues)


@app.get("/stages")
def get_stages():
    stages=matches_collection.distinct("Stage")
    return sorted(stages)

@app.get("/winners")
def get_winners():
    winners=matches_collection.distinct("Winners")
    return sorted(winners)

@app.get("/players")
def get_players():
    players=matches_collection.distinct("Player Of The Match")
    return sorted(players)


@app.get("/db-test")
def db_test():
    count = matches_collection.count_documents({})
    return {"mongodb_connected": True, "total_records_in_db": count}