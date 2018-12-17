import React, { Component } from "react"

export default class Alien extends Component {
  render() {
    console.log("aliaen render")
    return <div ref={"alien"} className="alien alien-green" />
  }
}
