
//------------------------------------------Functions Returning Functions-------------------------------------------------------//

function InterviewQuestion(job)
{
    if(job === 'designer')
    {
        return function(name)
        {
            console.log(name +' Can you explain what ux is ?')
        }

    }
    else if(job == 'teacher')
    {
        return function(name)
        {
            console.log(name +' what subject do you explain ?')
        }

    }
    else
    {
        return function(name)
        {
            console.log(name +' what do you do ?')
        }

    }

}

//here , we store the returned function in a variable.
var TeacherQuestion = InterviewQuestion('teacher');
TeacherQuestion('John');

//anoher possible implementation
InterviewQuestion('teacher')('John');

