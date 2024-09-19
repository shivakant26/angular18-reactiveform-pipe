# Feature 
1.Reactive form with validation
2.use built in pipe method

such as (UpperCasePipe,LowerCasePipe,DatePipe,JsonPipe,AsyncPipe,TitleCasePipe)

AsyncPipe = it is new of angular for async operation . means when u need to call api
            you not need to use .subscription() method is automatically called.

            use with :-
            {{itemList$ | async}}
            here $ is denoted to the async operation.

            below @Component decorator tell us to import all pipe like that

@Component({
  selector: 'app-pipeex',
  standalone: true,
  imports: [UpperCasePipe,LowerCasePipe,DatePipe,JsonPipe,AsyncPipe,TitleCasePipe],
  templateUrl: './pipeex.component.html',
  styleUrl: './pipeex.component.css'
})


3. Uses Signal here
    