import { UserStatus, UserType } from '@prisma/client';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class HigherStudiesDto {
  @IsString()
  institute: string;

  @IsString()
  course: string;

  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;
}

export class InternshipsDto {
  @IsString()
  company: string;

  @IsString()
  role: string;

  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;

  @IsArray()
  @IsString({ each: true })
  skills: string[];
}

export class UserDto {
  @IsString()
  id: string;

  @IsString()
  full_name?: string;

  @IsString()
  phone?: string;

  @IsEmail()
  @IsNotEmpty()
  personal_mail: string;

  @IsEmail()
  @IsNotEmpty()
  college_mail: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  college_roll: string;

  @IsString()
  university_roll?: string;

  @IsString()
  profile_pic_url?: string;

  @IsEnum(UserType)
  user_type: UserType;

  @IsString()
  stream?: string;

  @IsEnum(UserStatus)
  status: UserStatus;

  @IsOptional()
  @IsArray()
  higher_studies?: HigherStudiesDto[];

  @IsOptional()
  @IsArray()
  internships?: InternshipsDto[];
}

export class HigherStudiesUpdateDto {
  @IsOptional()
  @IsInt()
  id?: number; // Include the id as optional

  @IsString()
  institute: string;

  @IsString()
  course: string;

  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;
}

export class InternshipsUpdateDto {
  @IsOptional()
  @IsInt()
  id?: number; 

  @IsString()
  company: string;

  @IsString()
  role: string;

  @IsDateString()
  start_date: Date;

  @IsDateString()
  end_date: Date;

  @IsArray()
  @IsString({ each: true })
  skills: string[];
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  full_name?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsEmail()
  @IsOptional()
  personal_mail?: string;

  @IsEmail()
  @IsOptional()
  college_mail?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsString()
  college_roll?: string;

  @IsOptional()
  @IsString()
  university_roll?: string;

  @IsOptional()
  @IsString()
  profile_pic_url?: string;

  @IsOptional()
  @IsEnum(UserType)
  user_type?: UserType;

  @IsOptional()
  @IsString()
  stream?: string;

  @IsOptional()
  @IsEnum(UserStatus)
  status?: UserStatus;

  @IsOptional()
  @IsArray()
  higher_studies?: HigherStudiesUpdateDto[];

  @IsOptional()
  @IsArray()
  internships?: InternshipsUpdateDto[];
}
