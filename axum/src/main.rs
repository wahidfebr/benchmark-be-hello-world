use axum::{
    routing::get,
    Json, Router,
};
use std::net::SocketAddr;
use serde_json::json;

#[tokio::main]
async fn main() {
    println!("Starting the async runtime...");

    // Build our application with a single route
    let app = Router::new().route("/", get(hello_world));

    // Run our application
    let addr = SocketAddr::from(([127, 0, 0, 1], 3000));
    println!("Listening on http://{}", addr);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn hello_world() -> Json<serde_json::Value> {
    Json(json!({ "message": "hello world" }))
}
