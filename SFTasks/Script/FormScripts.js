function showForm()
{
  //UserForms.SubmitSETask.Visible = true;
  UserForms.SubmitSETask.ShowModal();
}

function SubmitSETask_OnShow(Sender)
{
  // Specify the comma-separated item list
  UserForms.SubmitSETask.ProductFamily.Properties.Items.CommaText = "SoapUI,TestComplete,Swaggerhub,CrossBrowserTesting,ServiceV,LoadUI,Hiptest,LoadNinja,TestLeft,Collaborator,QAComplete,Alertsite,Zephyr";
  //UserForms.SubmitSETask.Products.Items.CommaText = "soapui,testcomplete,swaggerhub,crossbrowsertesting,servicev,loadui,hiptest,loadninja,testleft,collaborator,qacomplete,alertsite,zephyr";
  UserForms.SubmitSETask.TaskType.Items.CommaText = "demo,troubleshooting,techreview,content,onboarding,other";
  //UserForms.SubmitSETask.DueDate.Date = aqDateTime.Now;
  //UserForms.SubmitSETask.Comments.Lines.Clear();
  UserForms.SubmitSETask.Comments.Lines.Insert(0, Project.Variables.DefaultCommentText);   
}

function SubmitSETask_OK_OnClick(Sender)
{
  Project.Variables.OppCode = UserForms.SubmitSETask.OppCode.Text;
  Project.Variables.SalesRep = UserForms.SubmitSETask.SalesRep.Text;
  Log.Message(UserForms.SubmitSETask.DueDate.Date);
  if ( UserForms.SubmitSETask.DueDate.Date == -700000 ) { 
      Project.Variables.DueDate = aqConvert.DateTimeToFormatStr(aqDateTime.Today(), "%m/%d/%Y");
    } else {
      Project.Variables.DueDate = aqConvert.DateTimeToFormatStr(UserForms.SubmitSETask.DueDate.Date, "%m/%d/%Y");
    };
  Project.Variables.TaskType = UserForms.SubmitSETask.TaskType.Items.Items(UserForms.SubmitSETask.TaskType.ItemIndex);
  Project.Variables.Product = UserForms.SubmitSETask.ProductFamily.Properties.Items.Items(UserForms.SubmitSETask.ProductFamily.ItemIndex);
  Project.Variables.CommentText = UserForms.SubmitSETask.Comments.Lines.Text;
  if (UserForms.SubmitSETask.ModalResult == mrOk)
  {
   // Log.Picture(UserForms.SubmitSETask);
  
    Log.Message("=SE Task Form ModalResult = OK");
    Log.Message("=OppCode: " + Project.Variables.OppCode);
    Log.Message("=SalesRep: " + Project.Variables.SalesRep);
    Log.Message("=DueDate: " + Project.Variables.DueDate);
    Log.Message("=TaskType: " + Project.Variables.TaskType);
    Log.Message("=Product: " + Project.Variables.Product);
    Log.Message("=CommentText: " + Project.Variables.CommentText);
  }
  else
    Log.Message("SE Task Form ModalResult = Cancel");
}