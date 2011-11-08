class CreateAppformjoins < ActiveRecord::Migration
  def self.up
    create_table :appformjoins do |t|
      t.integer :appointment_id
      t.integer :form_id
      t.integer :iform_id
      t.string :formname
      t.string :status
      t.datetime :formsubmittedtime

      t.timestamps
    end
  end

  def self.down
    drop_table :appformjoins
  end
end
