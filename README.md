# teamBaiwa

## Installation
To run the TeamBaiwa app offline, you need to install the following;

1. Make sure you have installed [Node.js](https://nodejs.org/en/download/). Versions 6.0.0 and higher should work. We recommend that you use the most-recent "Active LTS" version of Node.js.
2. Make sure you have installed `npm` (NB: `npm` is distributed with Node.js- which means that when you download Node.js, you automatically get npm installed on your computer).   

### Check that you have node and npm installed

- To check if you have Node.js installed, run this command in your terminal:

`node -v`

- To confirm that you have npm installed you can run this command in your terminal:

`npm -v`

## Quick Start

1. `npm install` (You can also use Yarn)
2. `node server.js` (or `node appjs`)
3. Open <http://localhost:3000>


## Health Facility Monitoring System
A problem facing Kaduna health care is an inability to supervise the facilities in the state as noted by the first problem statement under the Health section of the Grid3 competition.
This can be resolved with our Health Facility Monitoring System which can be used for all health facilities across the state including the most remote and isolated facilities where internet access might not be easy to come by.

## How it works
All health facilities in all 23 local governments are assigned a unique USSD code. This unique code is placed at conspicuous locations in all health facilities across the state. This ensures that whenever any hospital user (i.e patient, friends and families of the patient etc) is unsatisfied with the quality of service he/she is receiving, the user can dial the USSD code.
This leads to a menu requesting the language of service (available in English and Hausa). Selecting one of the languages will lead to the next menu which is a list of possible problems. This list of possible problems includes; unclean facilities, insufficient medication, bad patient relations, excessive time wait to see the doctor and others. 
If the patient selects “others”, a call will be placed through to him/her to find out what issues the user faced at the health facility. These issues are manually logged in the back end after the call to provide more detail to the user’s complaint.
It should be noted that all the complaints will be pooled together to form a database of complaints. This can be used to direct health inspectors to specific facilities to address specific issues. It can also be used to monitor whether such complaints have been address by seeing if the same complaints keep arising despite the health inspector claiming such complaints have been addressed.

Finally, the data can be analyzed to see which facilities need a total overhaul and which just need minor changes. For instance, continual complaints of “insufficient medication” despite a good supply can imply theft by members of staff.


## Challenges in Design and Implementation
    • Given the limited amount of time, the Hausa version was not built but the trial version in English was completed.
    • The public will need to be sensitized on the use of USSD and how it makes their voice heard.
