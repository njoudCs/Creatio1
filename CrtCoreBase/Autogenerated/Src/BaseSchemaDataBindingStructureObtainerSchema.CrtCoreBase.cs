﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: BaseSchemaDataBindingStructureObtainerSchema

	/// <exclude/>
	public class BaseSchemaDataBindingStructureObtainerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public BaseSchemaDataBindingStructureObtainerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public BaseSchemaDataBindingStructureObtainerSchema(BaseSchemaDataBindingStructureObtainerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e0c923d9-b51a-4299-be86-a2ec1d2af4f4");
			Name = "BaseSchemaDataBindingStructureObtainer";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("a5664658-26d5-4600-862a-86467fd59244");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,165,85,93,107,219,48,20,125,118,161,255,225,206,131,146,64,113,222,219,196,131,164,105,9,244,11,210,110,15,99,12,213,190,78,4,182,156,73,114,186,80,250,223,119,37,217,142,237,44,89,88,159,18,29,221,123,116,63,143,5,203,80,173,88,132,240,132,82,50,149,39,58,152,228,34,225,139,66,50,205,115,113,122,242,118,122,226,21,138,139,5,204,55,74,99,118,217,57,147,125,154,98,100,140,85,112,131,2,37,143,118,108,110,185,248,181,5,155,111,73,36,156,110,62,75,92,16,5,76,82,166,212,5,140,153,194,121,180,196,140,93,49,205,198,92,196,228,56,215,178,136,116,33,241,225,69,51,78,47,89,207,193,96,0,67,85,100,25,147,155,176,60,95,97,194,138,84,3,207,86,41,102,40,180,77,6,242,4,148,37,133,152,88,65,85,124,144,151,132,1,204,200,73,65,196,40,167,24,94,151,40,64,47,145,44,8,20,57,168,21,70,60,225,17,68,38,76,2,203,247,98,76,200,61,134,36,151,176,146,249,154,199,116,160,103,185,222,148,47,6,85,164,131,70,168,171,226,37,173,201,142,75,249,2,102,199,212,197,123,179,181,169,203,122,205,49,141,169,174,143,146,175,153,70,119,185,114,7,184,229,74,15,169,24,68,21,194,79,190,16,212,149,152,218,90,100,66,193,8,4,190,182,77,204,72,120,158,63,145,72,222,241,131,240,207,91,192,120,83,1,119,121,76,213,106,154,84,8,217,24,224,253,178,12,19,69,236,34,109,135,77,179,232,154,148,75,19,188,45,87,25,187,43,221,113,69,235,245,225,13,222,15,63,117,135,122,153,199,157,87,186,179,101,129,27,212,166,225,118,192,182,35,100,90,207,196,102,183,235,187,109,119,200,138,73,150,129,160,13,28,249,133,66,73,185,10,183,71,126,248,76,103,136,106,32,24,14,172,245,223,157,221,139,174,10,247,132,248,225,180,25,131,181,218,101,144,72,97,11,21,14,21,34,68,18,147,145,191,191,144,254,32,28,14,42,143,70,249,215,92,234,130,165,176,223,19,92,15,234,243,184,17,104,239,185,149,54,180,171,112,14,110,222,160,155,95,191,28,192,53,147,173,59,26,213,54,67,48,109,220,222,49,193,22,180,225,212,189,25,13,21,19,17,197,98,163,216,225,191,172,233,183,237,117,107,112,32,79,23,147,55,237,144,145,99,151,223,173,130,183,93,176,166,65,80,194,206,198,11,190,25,245,233,69,22,132,81,8,159,220,223,96,166,190,150,181,63,59,107,128,78,111,251,123,189,59,219,109,196,222,180,71,149,54,129,205,191,118,159,163,81,246,134,127,195,10,70,157,192,73,90,204,128,79,26,38,95,74,34,239,112,237,156,75,51,132,115,72,88,170,232,135,76,168,223,23,255,203,179,77,229,41,55,18,214,235,151,197,191,230,169,54,163,98,44,31,25,73,124,37,116,110,230,190,255,32,193,240,103,177,111,84,195,115,58,69,63,110,3,182,83,97,209,247,127,72,69,91,34,162,66,74,42,219,241,50,241,177,61,181,20,248,59,194,149,221,48,231,127,159,235,89,245,97,196,120,90,221,250,225,76,192,11,9,106,253,57,108,125,251,170,200,93,200,180,157,57,108,137,201,68,47,101,254,42,128,165,175,108,163,72,111,234,203,143,9,198,97,145,168,180,192,62,110,27,184,39,185,158,79,60,135,196,8,120,39,121,191,223,108,111,231,179,225,208,54,72,216,31,228,98,155,163,80,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e0c923d9-b51a-4299-be86-a2ec1d2af4f4"));
		}

		#endregion

	}

	#endregion

}

