﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ActivityNextStepQueryExecutorSchema

	/// <exclude/>
	public class ActivityNextStepQueryExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ActivityNextStepQueryExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ActivityNextStepQueryExecutorSchema(ActivityNextStepQueryExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("f9acd7de-eb4a-46d4-956b-6c169318a9de");
			Name = "ActivityNextStepQueryExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a39f3d79-3277-4890-a39e-707c83f6a851");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,88,91,79,219,72,20,126,78,165,254,7,111,86,106,109,41,49,78,83,165,64,129,10,2,84,217,45,151,5,186,125,168,170,213,96,31,147,89,249,18,102,198,165,217,138,255,190,103,60,99,123,236,216,129,182,188,197,51,231,126,190,115,153,36,36,6,190,32,62,88,87,192,24,225,105,40,220,105,154,132,244,38,99,68,208,52,113,79,225,155,184,20,176,224,207,159,125,127,254,172,151,113,154,220,88,151,75,46,32,126,219,248,70,206,40,2,95,178,113,247,61,36,192,168,191,66,243,129,38,183,213,161,169,53,142,211,164,251,198,253,131,119,93,51,232,58,119,143,18,65,5,5,222,73,112,76,124,145,50,69,129,52,191,51,184,65,243,173,105,68,56,223,182,246,209,153,175,84,44,139,32,252,149,1,91,30,125,3,63,67,166,156,97,99,99,195,218,225,89,28,19,182,220,211,223,179,120,17,65,12,137,200,35,136,215,0,150,207,32,220,237,207,90,5,245,55,246,172,48,101,214,203,66,221,75,11,164,221,75,183,80,176,97,104,248,124,8,33,201,34,113,64,147,0,29,178,197,114,1,105,104,183,139,118,6,214,41,166,216,218,181,250,107,125,233,59,95,80,52,77,4,176,132,68,150,47,221,95,239,253,182,213,174,17,197,124,207,35,83,198,242,152,66,20,96,48,207,25,253,74,4,168,203,133,250,176,24,144,32,77,162,165,245,145,3,67,228,37,10,63,214,63,89,237,251,173,22,9,73,160,164,214,85,32,33,23,44,147,169,148,138,178,235,136,250,90,79,254,123,189,43,118,67,119,230,59,150,196,122,175,215,176,2,195,152,229,136,238,221,175,183,231,4,196,60,237,244,57,7,229,242,210,159,67,76,176,100,178,56,177,222,131,184,128,8,47,3,117,96,163,59,18,173,76,29,42,14,153,201,194,178,175,132,89,192,111,209,162,4,238,106,18,115,215,236,134,229,174,73,113,66,18,114,3,108,96,245,213,105,69,214,47,196,247,48,36,251,65,76,147,11,122,51,23,28,213,132,36,226,48,80,151,83,130,114,102,88,205,5,182,154,114,148,19,188,159,147,223,231,17,235,105,143,252,252,234,227,44,208,188,232,132,187,31,20,110,247,167,197,117,223,113,37,133,226,53,173,183,136,206,165,254,220,109,98,165,205,87,108,71,98,134,24,33,137,15,7,121,32,237,178,32,250,142,82,34,45,57,166,17,150,0,151,22,217,242,123,138,248,20,160,78,63,81,49,63,39,12,121,37,137,173,14,177,57,45,8,163,216,155,174,176,14,221,163,219,140,68,24,88,108,118,166,21,210,31,29,187,94,221,124,23,175,28,199,244,178,106,162,165,167,149,111,92,71,12,221,105,82,55,83,174,133,50,16,25,107,21,229,94,130,100,181,125,3,223,123,237,70,234,124,98,120,146,224,96,137,38,27,76,210,22,233,187,78,225,223,36,202,96,231,125,70,131,61,187,150,107,199,113,148,112,247,211,28,24,232,75,84,169,33,97,253,134,88,206,162,200,122,241,66,159,184,23,16,34,37,166,76,153,241,206,85,152,217,109,41,11,45,250,152,50,46,206,152,110,145,182,99,22,107,81,126,31,40,23,59,233,245,191,104,254,158,44,188,211,84,160,95,148,207,33,184,196,150,141,81,228,179,128,219,102,165,249,18,240,127,194,82,98,189,28,136,5,126,10,166,254,219,39,172,204,186,240,135,234,210,172,179,28,182,141,2,45,236,175,40,176,49,201,129,146,155,164,18,231,206,248,126,116,71,150,92,193,2,185,176,163,194,211,151,134,138,117,127,160,44,119,234,48,125,44,182,11,236,170,57,41,65,100,171,140,58,122,114,106,255,12,76,58,238,85,42,83,95,7,197,195,29,220,24,38,249,44,166,9,194,151,138,32,245,215,14,117,233,70,9,21,221,206,7,150,172,11,7,231,189,49,154,114,56,22,148,39,105,0,145,66,101,131,87,175,4,50,161,74,140,62,192,246,97,0,149,1,71,220,107,236,181,72,214,206,107,90,99,224,32,203,202,12,170,52,106,46,26,90,118,131,75,213,108,9,79,157,70,101,134,98,186,175,170,34,15,13,250,82,213,173,185,152,60,101,253,180,168,50,186,252,69,122,55,77,179,68,198,105,228,121,213,185,49,135,228,0,106,189,184,162,34,130,142,187,115,150,250,192,249,145,218,254,58,69,96,77,51,113,136,81,196,25,119,198,2,96,7,203,125,238,219,237,196,103,119,184,71,119,8,202,239,46,210,78,123,138,200,78,81,215,77,202,158,116,210,205,56,246,205,83,204,253,160,14,36,87,245,250,39,239,27,171,74,6,85,5,116,168,83,152,252,165,57,174,218,239,96,221,156,80,179,199,40,44,124,82,113,132,161,20,164,132,119,97,185,80,93,182,57,52,117,96,125,72,111,168,79,162,179,5,168,39,216,37,214,191,47,16,41,101,149,253,138,71,39,149,113,229,74,34,219,137,139,2,56,110,69,111,194,173,96,20,110,78,134,225,120,114,61,28,189,30,121,67,111,178,233,15,95,121,126,56,246,174,199,91,227,55,227,190,227,12,126,222,18,68,78,14,155,154,41,90,224,189,209,3,98,66,163,39,140,223,126,18,60,73,0,59,35,7,175,54,199,163,0,252,161,31,250,222,48,8,71,163,225,181,231,133,67,207,27,5,19,15,182,198,155,254,228,215,34,87,152,112,36,67,115,137,147,171,128,103,139,53,152,47,207,127,61,241,134,147,145,247,102,8,30,90,67,38,175,39,195,209,36,216,28,251,228,218,219,218,244,250,26,187,58,234,43,184,85,53,91,229,161,163,204,86,248,186,246,89,104,30,252,232,50,139,175,100,192,85,198,178,115,128,168,217,79,87,229,150,121,150,100,169,108,146,229,144,211,235,129,222,107,81,179,249,12,59,88,158,19,49,111,244,220,74,136,236,180,63,33,200,108,208,149,176,226,249,163,196,180,237,208,106,238,239,217,134,3,238,33,229,139,136,152,107,141,49,218,234,150,254,160,130,202,185,71,40,153,19,94,186,134,58,74,135,116,109,159,177,163,120,33,150,182,201,66,130,128,202,220,144,40,71,57,215,53,125,72,243,140,225,170,182,83,236,72,122,53,175,113,251,122,130,205,130,245,46,169,119,199,202,224,171,70,113,190,195,84,210,212,24,211,214,150,176,233,53,141,253,220,38,241,75,190,88,23,159,90,252,125,101,115,162,55,47,237,105,109,17,43,53,61,210,161,89,48,42,90,100,175,215,92,51,30,37,97,117,55,41,196,77,201,162,40,198,135,177,82,236,63,5,243,172,6,4,19,23,5,197,153,129,246,26,110,222,53,176,186,93,225,168,198,155,59,88,227,212,183,189,119,15,251,221,196,118,19,212,133,168,237,71,138,234,16,83,51,248,124,158,138,244,113,105,49,101,234,39,203,44,198,94,218,37,255,132,112,236,175,71,122,239,41,53,204,130,54,130,90,7,48,195,90,191,94,93,149,171,228,94,192,109,70,25,4,141,63,128,122,114,123,93,239,159,164,184,162,49,236,213,246,221,130,127,191,44,176,89,18,166,40,73,254,187,139,143,58,70,73,68,255,3,187,89,128,131,252,49,170,179,165,199,85,79,189,50,242,17,84,212,154,99,190,57,86,31,35,237,143,62,117,90,63,204,207,158,63,251,31,134,82,179,152,32,23,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("f9acd7de-eb4a-46d4-956b-6c169318a9de"));
		}

		#endregion

	}

	#endregion

}
