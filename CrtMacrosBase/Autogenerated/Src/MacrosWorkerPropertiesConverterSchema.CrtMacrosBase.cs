﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: MacrosWorkerPropertiesConverterSchema

	/// <exclude/>
	public class MacrosWorkerPropertiesConverterSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public MacrosWorkerPropertiesConverterSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public MacrosWorkerPropertiesConverterSchema(MacrosWorkerPropertiesConverterSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("11aefaa3-3064-470b-b19e-8c7ea24ee52a");
			Name = "MacrosWorkerPropertiesConverter";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d9c4378b-4458-41ff-9d84-e4b071fcce18");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,85,77,79,219,64,16,61,7,169,255,97,229,94,28,9,57,119,32,65,212,165,20,9,84,74,160,156,183,246,56,172,186,94,155,253,128,90,136,255,222,89,175,29,111,150,152,228,210,75,146,157,157,143,55,111,102,95,4,45,65,213,52,3,114,7,82,82,85,21,58,73,43,81,176,149,145,84,179,74,124,58,120,253,116,48,49,138,137,21,89,54,74,67,121,28,156,147,43,38,158,6,163,159,71,194,152,61,57,23,154,105,6,106,187,131,7,32,185,215,140,91,55,116,252,44,97,133,38,146,114,170,212,17,185,166,153,172,212,67,37,255,128,188,145,85,13,210,102,196,232,103,252,5,178,13,153,205,102,228,68,153,178,164,178,89,116,231,91,168,37,40,16,90,145,122,29,70,178,62,142,20,178,42,49,8,128,100,18,138,121,228,234,156,255,213,32,114,200,135,74,209,108,65,116,245,222,211,33,218,234,159,244,144,102,30,166,218,252,230,44,35,153,237,106,87,83,228,136,92,238,112,57,25,195,123,72,62,198,103,177,188,182,172,173,153,30,46,143,200,77,11,211,221,135,180,182,134,123,133,248,144,70,1,89,59,185,181,163,223,108,223,173,117,78,215,190,225,209,46,221,100,178,2,109,247,99,242,214,129,66,188,14,215,38,72,140,83,90,154,76,87,114,31,152,169,4,170,113,224,2,94,8,195,72,42,112,253,171,98,108,142,91,24,198,65,110,239,173,181,212,84,210,146,8,124,89,243,200,108,180,21,45,66,138,78,102,173,183,79,204,142,218,113,192,212,102,133,105,199,92,224,52,15,220,246,97,245,26,244,99,149,91,66,37,123,70,194,220,109,237,14,228,194,176,156,92,128,70,13,72,13,215,70,194,151,230,138,138,149,161,43,136,219,75,222,157,46,243,30,20,43,72,60,88,201,124,222,102,73,206,203,90,55,189,207,68,2,38,19,222,77,139,213,130,197,207,103,42,9,168,39,236,199,14,175,213,144,102,153,61,66,73,127,26,144,77,192,77,226,59,92,83,129,101,229,33,137,6,200,209,212,37,199,148,9,118,105,199,216,230,73,43,110,74,145,92,170,51,254,66,27,181,4,142,9,177,40,46,25,28,175,129,244,173,124,99,220,62,204,185,69,150,184,229,114,166,7,166,31,111,236,120,1,15,42,118,198,180,42,113,228,76,85,226,174,169,81,7,159,12,229,8,170,231,46,58,244,137,27,224,185,96,149,156,229,121,188,89,120,58,32,82,141,234,243,116,112,112,66,142,4,108,137,59,86,2,146,166,201,18,213,151,195,15,249,21,10,138,188,196,93,194,110,16,94,206,211,158,36,199,207,47,202,13,144,211,211,112,86,123,239,213,206,135,234,118,94,253,39,45,246,196,127,68,170,222,61,231,178,205,233,101,89,184,42,223,129,163,133,64,87,198,255,91,217,15,187,175,3,109,85,199,190,90,220,186,239,125,132,106,36,113,159,105,68,98,222,71,245,188,199,99,120,73,72,67,255,120,237,14,190,4,194,213,189,213,143,75,246,59,103,21,34,76,110,117,66,24,206,67,133,8,11,249,58,17,222,37,195,155,183,194,51,42,92,97,237,228,42,124,139,31,21,223,190,248,206,186,105,124,251,7,75,75,51,48,120,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("11aefaa3-3064-470b-b19e-8c7ea24ee52a"));
		}

		#endregion

	}

	#endregion

}

