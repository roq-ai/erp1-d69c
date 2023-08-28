import { BusinessApplicationInterface } from 'interfaces/business-application';
import { LandscapeAnalysisInterface } from 'interfaces/landscape-analysis';
import { LogAnalysisInterface } from 'interfaces/log-analysis';
import { SecurityAnalysisInterface } from 'interfaces/security-analysis';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  business_application?: BusinessApplicationInterface[];
  landscape_analysis?: LandscapeAnalysisInterface[];
  log_analysis?: LogAnalysisInterface[];
  security_analysis?: SecurityAnalysisInterface[];
  user?: UserInterface;
  _count?: {
    business_application?: number;
    landscape_analysis?: number;
    log_analysis?: number;
    security_analysis?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
