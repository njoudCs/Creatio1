﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseConstsSchema

	/// <exclude/>
	public class BaseConstsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseConstsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseConstsSchema(BaseConstsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("4df8bd7f-2981-4bed-9c2c-8844d6bb7389");
			Name = "BaseConsts";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("241c12b1-6ed7-4197-86c3-2351cca1bc30");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,148,93,111,219,32,20,134,175,19,41,255,1,229,166,237,5,141,141,193,96,237,67,2,140,167,221,108,145,146,238,102,218,133,155,144,22,201,49,153,193,173,172,169,255,125,56,73,183,54,106,218,108,150,44,203,199,28,158,247,156,243,226,214,153,250,6,204,58,231,245,250,221,104,56,26,214,229,90,187,77,185,208,96,174,155,166,116,118,229,47,165,173,87,230,166,109,74,111,108,61,26,254,26,13,7,155,246,186,50,11,224,124,136,45,192,162,42,157,3,162,116,58,44,117,222,133,5,253,162,193,247,175,215,206,86,218,235,31,253,219,243,156,70,151,75,91,87,29,248,212,154,37,152,207,196,102,61,179,85,219,35,174,62,47,193,7,80,235,251,237,183,243,113,76,68,134,99,197,96,145,164,2,198,56,142,96,134,152,130,81,20,231,105,132,82,46,148,24,95,108,229,31,165,56,223,244,149,138,54,20,172,157,155,54,118,17,30,243,242,38,144,198,143,81,176,15,143,95,223,107,171,88,52,246,222,233,70,86,70,215,126,222,109,244,161,232,140,80,70,4,134,5,33,28,98,69,17,228,82,37,48,197,44,18,4,75,86,112,242,150,232,45,104,122,107,107,125,20,35,20,227,34,83,10,38,24,43,136,57,73,33,147,25,133,56,150,12,23,8,137,156,177,147,48,188,170,212,122,83,217,78,55,46,248,129,47,215,166,190,170,141,63,28,6,71,25,79,4,39,16,139,40,135,185,138,99,152,113,18,135,97,144,136,164,50,10,215,105,192,169,109,124,89,93,185,55,120,20,69,130,210,88,66,69,121,40,171,72,2,79,22,2,18,36,115,20,203,132,38,89,113,18,111,103,242,45,199,4,55,148,222,62,7,247,220,126,143,193,95,54,75,56,78,148,144,79,140,135,50,150,247,198,83,76,50,36,36,207,79,98,247,85,62,101,189,48,72,76,145,202,168,164,48,21,57,133,121,209,247,85,32,190,55,185,202,18,38,211,45,107,48,232,239,201,100,2,222,187,118,189,46,155,238,227,99,224,172,231,156,129,178,199,128,54,112,128,15,32,112,87,86,173,190,252,147,53,121,154,118,68,181,169,253,139,162,191,245,91,5,221,120,95,244,139,50,190,88,175,239,195,116,111,59,160,239,130,109,119,42,32,184,54,33,182,44,187,127,147,178,59,109,251,212,195,67,70,147,156,164,57,130,69,46,249,107,77,59,170,53,20,246,51,84,100,150,65,167,89,25,221,0,187,2,254,86,3,183,181,11,104,67,19,192,249,172,221,232,230,206,56,219,92,252,135,248,157,243,250,118,30,122,187,72,4,75,179,34,28,222,34,9,222,70,17,228,2,231,144,134,127,4,39,69,94,164,152,238,102,254,48,26,62,252,6,32,189,126,145,172,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("4df8bd7f-2981-4bed-9c2c-8844d6bb7389"));
		}

		#endregion

	}

	#endregion

}
