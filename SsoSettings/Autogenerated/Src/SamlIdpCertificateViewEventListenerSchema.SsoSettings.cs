﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SamlIdpCertificateViewEventListenerSchema

	/// <exclude/>
	public class SamlIdpCertificateViewEventListenerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SamlIdpCertificateViewEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SamlIdpCertificateViewEventListenerSchema(SamlIdpCertificateViewEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("aca33c09-c1d7-4cd4-9cd0-e3d181aceb59");
			Name = "SamlIdpCertificateViewEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6ea8ffd3-a056-4527-8ee5-0d2e2601227e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,85,77,111,226,48,16,61,83,169,255,193,74,47,65,66,230,78,11,171,18,232,46,82,191,36,216,246,176,218,131,73,6,226,109,112,88,219,161,139,182,252,247,29,219,9,155,80,67,123,139,199,243,229,55,111,94,4,91,129,90,179,24,200,12,164,100,42,95,104,26,229,98,193,151,133,100,154,231,130,78,85,62,5,173,185,88,170,243,179,191,231,103,173,66,225,247,81,247,91,190,129,113,194,141,255,165,215,89,194,49,123,51,211,81,175,209,240,232,213,88,104,172,12,234,67,7,58,222,128,208,198,15,61,47,36,44,177,32,137,50,166,84,143,76,217,42,155,36,235,8,164,230,11,30,51,13,214,249,150,43,13,2,164,13,249,97,19,109,27,23,225,52,78,97,197,238,17,81,210,39,193,251,52,79,28,94,131,246,79,12,95,23,243,140,199,36,54,5,61,245,140,99,35,53,233,145,33,83,224,41,138,201,204,76,246,111,184,3,157,230,9,190,226,81,242,13,166,178,221,182,214,238,64,92,2,18,73,192,83,253,129,214,30,150,215,27,46,117,193,50,119,106,19,155,191,181,97,146,20,10,36,206,72,64,108,6,132,143,108,120,210,239,141,235,203,125,24,111,130,233,138,244,15,178,185,209,108,29,134,119,76,176,37,72,250,21,180,51,15,183,6,214,208,3,106,208,57,72,212,118,133,37,232,66,10,111,109,122,3,58,78,111,100,190,26,13,195,230,19,16,181,21,147,219,40,207,138,149,120,98,89,1,109,155,173,245,197,155,201,221,245,136,40,178,204,150,221,53,241,222,228,60,33,247,57,6,109,93,64,148,50,177,132,36,204,231,191,176,91,162,64,36,32,59,229,92,174,23,26,164,157,238,181,92,42,2,29,82,91,38,107,159,109,215,64,160,250,170,143,166,241,12,4,183,156,101,219,85,248,112,22,199,24,209,164,130,75,195,23,36,244,167,233,91,32,170,182,202,17,184,160,221,190,3,102,222,134,158,240,218,64,198,189,91,109,69,252,176,6,167,0,6,5,111,165,142,193,230,63,12,174,66,45,141,122,134,185,202,227,23,208,182,2,7,105,19,211,137,80,154,137,24,168,43,28,21,82,162,183,161,109,120,138,201,29,219,115,187,62,224,11,132,213,109,92,121,126,183,126,118,195,221,101,183,219,37,87,92,164,32,185,78,242,152,116,7,150,35,78,3,242,13,42,20,79,74,174,60,136,17,100,96,230,237,167,200,16,22,40,99,53,142,84,96,207,81,30,104,45,186,10,171,208,49,200,195,41,114,152,169,58,7,58,213,185,196,28,83,109,40,140,67,45,207,15,182,33,107,165,247,56,189,183,55,55,230,214,231,195,108,123,144,156,96,72,19,249,247,138,3,199,165,230,64,79,70,195,41,196,133,52,156,16,75,46,240,239,146,66,252,18,49,49,254,131,118,13,123,154,133,1,26,157,226,224,191,46,40,1,51,252,116,237,134,7,250,226,90,167,70,63,188,130,212,166,207,56,106,20,171,73,130,223,19,53,254,141,196,10,157,164,208,71,38,81,200,112,207,43,176,61,138,83,85,40,27,13,27,204,179,100,82,197,202,4,13,190,49,145,100,160,170,201,150,240,186,213,160,87,221,202,109,31,183,54,213,137,192,14,250,129,27,126,48,176,100,42,105,134,49,214,197,31,1,193,96,150,2,86,7,32,177,132,69,63,152,245,142,254,95,61,138,22,32,243,9,47,119,144,196,185,208,140,11,243,147,214,105,169,106,36,97,154,53,154,56,181,37,159,213,81,223,142,96,236,225,138,248,116,122,239,227,215,226,61,161,79,104,131,179,214,141,187,127,180,47,164,16,117,9,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("aca33c09-c1d7-4cd4-9cd0-e3d181aceb59"));
		}

		#endregion

	}

	#endregion

}
