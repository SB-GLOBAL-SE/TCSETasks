function translateTaskType(taskType)
{ 
  var taskMap = [];
  taskMap["demo"] = "Demo-Advanced";
  taskMap["troubleshooting"] = "Troubleshooting Call";
  taskMap["techreview"] = "Tech Review";
  taskMap["content"] = "Content Creation";
  taskMap["onboarding"] = "Demo-Advanced";
  taskMap["other"] = "Other"
  //taskMap[""] = "";  
  return taskMap[taskType];
  
}

function translateProductCode(product)
{ 
  var prodMap = [];
  prodMap["Collaborator"] = "Collaborator Enterprise - Concurrent User License (Includes 1 year Maintenance)";
  prodMap["TestComplete"] = "TestComplete Platform - Floating License - (Includes 1 year Maintenance)";
  prodMap["CrossBrowserTesting"] = "CrossBrowserTesting Enterprise 10 (Annual Renewal)";
  prodMap["SoapUI"] = "SoapUI Pro + LoadUI Pro Bundle Fixed User Subscription License (2 Year Subscription)";
  prodMap["TestLeft"] = "TestLeft - Node-Locked Subscription License (1 Year Subscription)";
  prodMap["LoadNinja"] = "LoadNinja Basic - 1,000 Virtual Users (1 Year Renewal)";
  prodMap["Swaggerhub"] = "SwaggerHub Enterprise 100 Designers - On-Premise (1 Year Renewal)";
  prodMap["QAComplete"] = "QAComplete Concurrent User Subscription License - On Premise (1 Year Subscription)";
  prodMap["Alertsite"] = "Alertsite UXM Synthetic Measurements";
  prodMap["Zephyr"] = "Zephyr Teams - Named User Subscription License - 10 Users - SaaS (1 Year Subscription)";
  prodMap["ServiceV"] = "ServiceV Pro Fixed User Subscription License (1 Year Renewal)";
  prodMap["LoadUI"] = "LoadUI Pro Medium Floating User Subscription License (1 Year Subscription)";
  prodMap["Hiptest"] = "Hiptest Enterprise - 100 Users - On Premise (1 Year Renewal)";
  
  return prodMap[product];
  
}

