class GirlScoutsActivityPermissionForm < ActiveRecord::Base
  belongs_to :user
  belongs_to :girls_scout
  belongs_to :girl_scouts_activity
  validates_uniqueness_of :girl_scouts_activity_id, :scope => [:girls_scout_id]
  #alidates_presence_of :gapf_emergency_contact_1_first_name,:gapf_emergency_contact_1_last_name,:gapf_emergency_contact_1_phone_1_1,:gapf_emergency_contact_1_phone_1_2,:gapf_emergency_contact_1_phone_1_3,:gapf_girl_scouts_first_name,:gapf_emergency_contact_3_last_name,:gapf_physician_first_name,:gapf_physician_last_name,:gapf_physician_phone_1,:gapf_physician_phone_2,:gapf_physician_phone_3,:gapf_policy,:gapf_my_insurance_carrier
end
