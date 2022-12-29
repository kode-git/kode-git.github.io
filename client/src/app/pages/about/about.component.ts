import { Component, OnInit } from '@angular/core';


class Skill {
  name : string; // name of the skill
  level: number; // level of the skill (0 to 100) is in percentage
  image : string; // url of the image
  color: string; // color of the skill background (gray or white)
  backgroundColor : string // color of the background for the progress bar

  constructor(name : string, level : number, image : string, color : string, backgroundColor : string){
    this.name = name;
    this.level = level;
    this.image = image;
    this.color = color;
    this.backgroundColor = backgroundColor;
  }

}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills : Skill[];

  constructor() { 
    this.skills = [
      new Skill('Tensorflow', 90, 'assets/skills/tensorflow.png', '#FAFAFA', '#ECECEC'),
      new Skill('Nest', 85, 'assets/skills/nest.png', '#ECECEC', '#FAFAFA'),
      new Skill('MongoDB', 85, 'assets/skills/mongo.png', '#FAFAFA', '#ECECEC'),
      new Skill('Docker', 85, 'assets/skills/docker.png', '#ECECEC', '#FAFAFA'),
      new Skill('MySQL', 85, 'assets/skills/mysql.png', '#FAFAFA', '#ECECEC'),
      new Skill('Node.js', 85, 'assets/skills/node.png', '#ECECEC', '#FAFAFA'),
      new Skill('Redis', 80, 'assets/skills/redis.png', '#FAFAFA', '#ECECEC'),
      new Skill('Flask', 80, 'assets/skills/flask.png','#ECECEC', '#FAFAFA'),
      new Skill('Angular', 80, 'assets/skills/angular.png','#FAFAFA', '#ECECEC'),
      new Skill('Django', 80, 'assets/skills/django.png', '#ECECEC', '#FAFAFA'),
      new Skill('PyTorch', 80, 'assets/skills/pytorch.png',  '#FAFAFA', '#ECECEC'),
      new Skill('Apache Hadoop', 75, 'assets/skills/hadoop.png','#ECECEC', '#FAFAFA'),
      new Skill('Apache Hive', 75, 'assets/skills/hive.png', '#FAFAFA', '#ECECEC'),
      new Skill('Apache Spark', 75, 'assets/skills/spark.png', '#ECECEC', '#FAFAFA'),
      new Skill('InfluxDB', 75, 'assets/skills/influxdb.png', '#FAFAFA', '#ECECEC'),
      new Skill('Grafana', 75, 'assets/skills/grafana.png','#ECECEC', '#FAFAFA'),
      new Skill('AWS', 70, 'assets/skills/aws.png', '#FAFAFA', '#ECECEC'),
      new Skill('Kubernetes', 60, 'assets/skills/kubernetes.png', '#ECECEC', '#FAFAFA'),
      new Skill('Apache Airflow', 60, 'assets/skills/airflow.png', '#FAFAFA', '#ECECEC'),
      new Skill('GraphQL', 30, 'assets/skills/graphql.png','#ECECEC', '#FAFAFA'),







    ]
  }

  ngOnInit(): void {
  }


}
