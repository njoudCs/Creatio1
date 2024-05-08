﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: GrantRightsToPortalColumnsExecutorSchema

	/// <exclude/>
	public class GrantRightsToPortalColumnsExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public GrantRightsToPortalColumnsExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public GrantRightsToPortalColumnsExecutorSchema(GrantRightsToPortalColumnsExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("629a7d66-7802-4c3f-989b-1601df7b793e");
			Name = "GrantRightsToPortalColumnsExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("1296b383-c2ef-47b8-ae67-0601cddb70e1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,88,91,111,219,54,20,126,86,129,254,7,206,3,10,25,176,4,249,110,55,75,11,201,150,3,15,109,26,196,238,250,48,12,129,34,49,9,55,89,114,73,42,153,17,228,191,239,136,212,253,226,186,69,177,32,176,77,242,92,62,158,27,15,25,56,59,204,246,142,139,209,22,83,234,176,240,142,235,139,48,184,35,247,17,117,56,9,131,215,175,158,95,191,82,34,70,130,123,180,57,48,142,119,103,149,49,208,251,62,118,99,98,166,95,224,0,83,226,214,104,150,14,119,106,147,31,72,240,53,159,44,2,216,237,194,160,121,133,226,182,249,50,238,86,170,165,213,186,100,7,156,112,130,25,16,0,201,62,186,245,137,139,92,223,97,12,93,80,39,224,215,228,254,129,179,109,120,21,82,238,248,176,237,104,23,48,251,95,236,70,60,164,232,45,90,175,3,6,11,254,198,165,100,207,211,5,16,245,44,4,42,191,82,124,15,208,208,138,96,223,99,111,209,21,37,143,14,199,114,113,47,7,232,51,195,20,118,18,72,139,162,155,168,52,62,43,146,10,188,135,141,251,128,119,206,71,39,112,238,49,69,55,184,62,89,98,162,216,241,194,192,63,160,139,136,120,232,102,47,246,114,29,250,88,140,207,81,128,159,196,146,218,153,14,12,107,58,237,47,52,123,106,78,181,209,106,216,215,230,139,149,165,141,7,139,229,160,191,24,78,135,243,85,167,123,76,56,216,194,222,237,253,240,128,89,163,6,115,48,55,135,150,57,214,70,150,177,212,150,118,31,52,152,227,190,102,24,99,99,60,89,24,240,55,171,104,248,64,24,255,141,113,10,238,123,135,110,152,8,164,196,19,137,232,18,197,51,234,216,214,106,98,89,243,161,54,51,205,137,54,50,13,80,98,128,186,197,196,54,39,83,115,181,178,7,253,78,175,51,52,250,227,241,120,110,107,11,107,1,100,198,196,212,102,51,115,165,25,211,213,116,62,52,44,123,54,28,116,122,49,20,165,51,159,15,102,246,210,94,104,163,193,116,0,31,99,83,155,15,45,75,27,205,166,163,225,202,182,97,59,35,16,105,207,140,254,220,128,237,25,67,11,200,140,249,24,52,175,166,154,217,159,15,205,249,196,48,151,182,221,121,57,75,130,3,7,158,140,143,114,176,124,196,252,33,108,141,22,177,89,85,238,22,73,167,127,94,123,61,148,204,72,203,192,76,247,29,186,192,60,49,148,218,69,207,98,35,143,14,69,110,221,120,237,242,220,92,158,42,253,34,100,48,28,23,0,116,46,38,148,88,206,70,204,168,149,232,237,74,2,69,151,64,212,142,204,36,169,199,116,93,204,88,12,160,211,67,157,76,119,167,171,155,76,45,142,155,133,200,81,89,72,182,253,68,72,97,44,133,232,43,26,238,90,97,100,154,214,176,1,250,123,72,218,149,117,245,79,71,145,20,53,196,115,133,125,128,120,102,127,141,28,255,152,57,10,244,200,97,137,121,165,3,100,41,83,151,86,86,137,188,219,236,231,121,181,128,64,145,99,17,197,75,43,159,82,187,105,60,164,178,214,113,185,190,134,92,134,130,226,229,63,207,19,71,235,82,60,150,211,106,174,46,23,164,60,61,16,31,35,53,231,214,227,175,130,42,69,73,34,79,55,61,79,85,211,73,165,160,80,207,66,246,15,199,143,112,154,212,165,96,232,125,23,99,45,0,20,165,155,196,177,162,188,200,239,228,75,196,181,212,67,188,56,61,82,184,73,104,203,33,58,127,151,44,232,25,168,174,190,4,175,145,0,136,186,250,54,140,93,152,38,139,114,7,231,140,227,62,32,181,32,126,237,33,18,20,116,229,38,42,81,103,185,23,83,151,43,95,155,81,89,158,192,121,230,182,236,151,98,30,209,32,221,165,164,17,75,226,163,88,115,30,67,40,227,27,204,139,199,143,4,34,14,200,15,248,17,251,170,168,245,142,183,35,193,231,128,240,24,129,152,41,32,18,227,12,86,226,199,99,50,17,205,126,246,192,6,252,61,218,135,140,136,83,18,138,87,228,251,169,25,164,135,224,48,114,67,234,173,189,205,143,86,167,90,157,128,190,165,5,96,70,248,229,1,83,12,148,209,237,223,32,181,161,106,165,201,46,153,245,43,135,66,11,198,33,141,50,211,116,83,89,102,224,101,146,234,145,219,46,169,224,235,146,164,3,51,115,135,156,32,167,224,62,200,219,74,217,17,238,75,77,12,14,136,199,58,156,246,252,240,255,151,165,178,167,79,41,79,228,238,120,109,42,108,172,138,116,105,109,15,123,12,19,143,152,130,149,96,44,138,204,54,20,61,77,46,244,79,227,175,230,84,147,159,49,130,95,82,53,186,240,0,83,115,35,230,96,100,98,22,18,82,169,90,253,18,63,9,221,137,58,232,66,1,89,146,90,178,103,77,166,10,41,32,103,90,83,96,29,240,240,148,120,87,160,28,114,145,41,61,84,139,159,20,103,183,76,188,128,162,198,177,247,41,104,226,1,23,227,45,217,97,253,50,124,106,230,179,14,205,218,170,126,90,68,148,66,51,28,247,211,122,13,195,199,208,35,119,228,7,64,164,140,63,5,69,173,74,52,8,172,149,133,50,111,94,23,26,120,107,133,32,229,45,87,130,6,206,82,234,151,120,243,122,220,232,242,108,53,61,103,54,144,120,216,187,162,161,139,61,200,112,104,33,248,181,136,139,171,164,120,231,75,197,10,93,230,170,154,21,58,34,206,246,55,155,170,172,60,44,191,16,254,144,195,234,108,157,91,31,95,194,72,244,150,39,132,117,133,31,154,239,157,67,15,146,52,149,83,44,162,199,232,69,125,0,134,44,31,90,152,46,104,24,237,247,80,234,114,53,76,224,173,132,73,15,181,31,10,85,28,169,97,122,249,97,249,254,61,50,100,57,47,27,89,250,171,221,63,224,102,247,31,184,79,198,184,26,235,162,29,220,147,0,235,242,118,95,32,254,249,7,66,206,169,111,184,67,249,22,174,231,204,73,168,146,162,91,175,127,233,193,80,60,18,18,226,35,187,110,103,42,160,136,159,44,72,19,140,180,133,170,53,80,133,23,133,236,62,38,163,18,237,27,175,17,201,226,121,227,21,63,238,120,37,129,117,136,77,126,228,46,82,45,249,103,217,113,116,92,111,185,199,106,56,150,190,227,46,154,95,58,139,183,82,41,172,161,233,141,59,94,183,210,234,138,243,83,138,134,14,230,18,160,125,162,226,228,84,107,253,56,122,243,6,29,37,205,161,229,45,192,183,26,220,180,83,168,188,160,244,80,186,32,142,102,72,69,134,235,136,142,81,229,96,114,170,99,72,244,133,19,216,30,225,89,179,113,50,242,134,231,153,222,73,232,79,2,255,35,216,95,106,57,243,237,103,17,241,76,151,36,152,124,178,19,249,149,166,109,229,61,173,18,252,137,187,43,57,1,113,217,240,236,166,52,37,94,141,84,111,120,149,75,58,230,98,198,159,181,239,17,102,225,255,63,203,19,86,59,154,21,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("629a7d66-7802-4c3f-989b-1601df7b793e"));
		}

		#endregion

	}

	#endregion

}

