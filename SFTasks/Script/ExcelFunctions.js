/*
Functions for accessing the Excel file we use to record SalesForce Tasks

*/

function ReadDataFromExcel()
{
  let Excel = getActiveXObject("Excel.Application");
  Excel.Workbooks.Open("C:\\Users\\dermot.canniffe\\OneDrive - SmartBear Software, Inc\\TestComplete 14 Projects\\SFTasks.xlsm");

  let RowCount = Excel.ActiveSheet.UsedRange.Rows.Count;
  let ColumnCount = Excel.ActiveSheet.UsedRange.Columns.Count;
  
   
  
  for (let i = 1; i <= RowCount; i++)
  {
    let s = "";
    for (let j = 1; j <= ColumnCount; j++)
      s += (VarToString(Excel.Cells.Item(i, j)) + "\r\n");
    Log.Message("Row: " + i, s);
  }

  Excel.Quit();
}