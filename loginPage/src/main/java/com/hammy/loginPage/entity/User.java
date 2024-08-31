package com.hammy.loginPage.entity;

import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "signup")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    private ObjectId id;

    @Indexed(unique = true)
    @NonNull
//    @NotBlank(message = "Username is required")
    private String userName;

//    @NotBlank(message = "Email is required")
    private String email;

    @NonNull
//    @NotBlank(message = "Password is required")
    private String password;
}
