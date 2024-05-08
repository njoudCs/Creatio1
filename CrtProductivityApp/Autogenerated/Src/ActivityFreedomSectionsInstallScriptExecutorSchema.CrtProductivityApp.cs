﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ActivityFreedomSectionsInstallScriptExecutorSchema

	/// <exclude/>
	public class ActivityFreedomSectionsInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ActivityFreedomSectionsInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ActivityFreedomSectionsInstallScriptExecutorSchema(ActivityFreedomSectionsInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7df5e2b6-0f87-464b-a17e-c156f04bdf98");
			Name = "ActivityFreedomSectionsInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("e57a91ca-433a-4790-a303-ef85bf18785a");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,87,91,79,227,56,20,126,238,72,243,31,60,221,151,84,34,165,180,161,151,97,64,74,122,97,186,130,89,134,50,203,227,202,36,6,34,82,155,177,29,186,104,196,127,223,147,216,105,238,161,44,90,105,53,98,154,216,231,230,239,124,231,28,135,226,53,17,143,216,37,232,138,112,142,5,187,149,221,41,163,183,254,93,200,177,244,25,253,248,225,215,199,15,173,80,248,244,14,173,158,133,36,235,163,194,59,200,7,1,113,35,97,209,61,37,148,112,223,45,201,204,176,196,165,197,51,159,254,76,23,179,1,172,215,140,86,239,112,82,183,222,157,57,181,91,115,42,125,233,19,1,2,209,191,214,111,156,220,65,188,104,26,96,33,62,35,27,162,127,242,229,243,130,19,226,177,245,74,159,102,73,133,196,65,176,114,185,255,40,231,127,19,55,148,140,199,250,251,251,251,177,234,27,53,91,62,149,132,83,28,32,247,205,218,232,51,90,214,153,253,21,7,149,158,138,69,114,84,194,201,46,184,255,132,37,81,251,143,234,5,113,130,61,70,131,103,116,26,250,30,250,235,145,51,47,212,145,92,51,254,240,24,0,31,150,30,58,142,247,187,23,152,11,98,180,157,190,99,77,173,209,216,156,15,122,142,105,141,103,182,9,127,7,230,104,52,180,122,7,142,51,24,79,231,237,206,81,131,31,23,7,132,122,152,67,246,207,193,99,80,246,49,29,143,28,199,30,30,154,135,163,105,207,180,70,253,177,233,12,71,125,115,97,13,173,254,96,108,247,251,179,81,179,15,137,197,131,168,119,208,235,31,204,250,67,103,98,78,7,253,33,56,152,28,154,19,7,254,91,56,243,217,112,97,91,7,243,241,160,217,1,214,64,233,92,173,220,123,178,198,63,74,142,14,135,19,219,94,28,216,230,225,196,26,152,214,98,60,50,109,199,26,153,19,0,110,2,110,172,73,191,23,59,138,243,6,176,168,212,229,243,120,78,228,61,243,234,178,120,195,88,128,190,226,232,180,103,190,107,252,16,132,67,226,169,138,11,133,185,215,14,138,170,184,213,122,194,28,9,18,85,43,196,75,201,6,173,226,23,163,32,29,203,182,162,194,14,215,212,88,132,212,133,231,144,74,67,173,116,109,40,95,238,139,7,163,211,73,100,23,156,173,141,182,138,69,35,216,226,68,134,156,106,135,93,197,87,178,2,26,96,254,5,42,225,196,232,160,19,212,139,101,95,42,206,182,20,43,25,122,62,187,80,252,252,223,156,240,2,187,15,248,142,180,147,141,235,123,194,33,229,223,160,149,182,59,221,165,152,255,12,113,144,24,2,62,192,58,24,3,213,248,52,237,78,7,97,161,195,122,47,78,202,10,58,37,50,229,60,221,214,176,62,122,17,55,55,193,74,251,205,162,228,22,144,105,87,217,109,239,161,246,210,107,239,42,10,235,153,182,242,22,181,164,138,219,165,28,148,53,58,85,248,156,249,66,126,137,234,242,36,194,40,105,183,171,243,229,117,61,42,57,6,53,35,11,74,42,131,74,94,7,185,4,163,252,119,230,103,207,6,196,248,35,247,174,33,220,210,229,77,48,104,198,229,172,21,27,82,19,21,107,187,88,71,159,39,194,128,19,17,6,73,21,165,64,26,90,68,205,89,99,230,108,7,148,119,179,125,60,6,60,97,232,138,144,147,153,147,162,12,213,164,65,78,212,151,209,197,224,18,90,44,1,253,244,241,184,80,12,106,217,72,61,164,134,90,155,123,63,32,200,72,181,187,209,79,198,85,68,244,232,40,93,219,243,178,98,144,91,133,204,159,56,8,137,62,93,137,173,157,35,164,205,188,168,95,245,243,146,173,32,101,191,138,128,79,12,134,198,37,89,179,39,114,145,27,179,202,65,51,11,179,161,120,128,135,36,223,67,194,159,117,74,102,241,74,90,178,185,250,200,212,69,186,171,105,243,10,55,106,174,3,170,109,41,167,138,1,53,225,37,57,51,42,43,50,6,4,18,49,213,151,1,155,122,87,48,179,147,171,207,21,219,154,20,101,112,246,178,5,189,73,99,19,9,106,217,181,238,130,241,57,118,239,141,77,246,78,115,146,176,2,98,208,78,51,62,151,183,51,70,196,55,6,151,43,112,100,68,30,51,218,123,149,119,24,93,15,255,210,96,241,194,162,173,189,52,130,247,170,159,10,228,226,235,75,206,119,188,34,148,8,56,206,181,191,162,253,75,182,17,241,128,44,76,213,226,188,120,219,36,173,232,226,165,14,151,43,198,122,218,110,178,76,213,70,128,91,70,190,127,214,235,167,56,148,198,115,220,12,217,38,57,126,3,56,149,179,91,25,241,111,141,212,198,49,234,109,187,83,132,38,220,235,9,207,160,25,205,16,201,154,33,106,117,87,68,150,16,218,67,187,32,147,234,110,161,169,80,204,64,146,168,229,75,91,53,193,250,142,103,231,167,76,148,246,119,85,183,127,139,140,79,185,18,183,233,115,166,209,171,110,156,9,237,189,93,180,30,252,38,138,210,18,187,132,145,59,78,198,72,21,69,169,81,85,97,213,119,166,252,85,172,42,250,220,222,127,120,113,72,189,188,111,80,188,254,49,20,222,4,190,171,73,23,63,43,206,37,214,118,250,76,136,168,148,126,59,21,100,26,8,213,48,202,11,70,142,182,126,138,223,49,187,123,139,232,139,139,163,88,168,107,105,238,50,91,233,123,199,41,155,215,221,171,112,168,237,237,82,212,187,26,171,78,182,90,205,47,190,252,3,23,27,140,124,163,18,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7df5e2b6-0f87-464b-a17e-c156f04bdf98"));
		}

		#endregion

	}

	#endregion

}
