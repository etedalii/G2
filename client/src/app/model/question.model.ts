export class Question {
    public _id!: number;
    public title?: string;
    public questionType?: boolean;// False for single answer, True for multiple answer
    public userCreator?: string;
    public publish?: String;
    public status?: Boolean;
    
    public q1!: string;
    public q2!: string;
    public q3!: string;
    public q4!: string;
  }
  